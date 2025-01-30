const exp = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const expHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { verifyToken } = require("../Middleware/auth");
const userApp = exp.Router();

const registerUser = expHandler(async (req, res) => {
  let user = req.body;
  let usersCollection = req.app.get("usersCollection");
  let username = user.name;
  let dbuser = await usersCollection.findOne({ name: username });
  if (dbuser) {
    return res.send({ status: 400, message: "User already exists!" });
  }
  const hashed = await bcrypt.hash(user.password, 5);
  const newUser = {
    name: username,
    password: hashed,
    role: user.role,
    issuesSolved: [],
    projects: [],
  };

  await usersCollection.insertOne(newUser);
  return res.send({ status: 200, message: "Successfully Registered!" });
});

const loginUser = expHandler(async (req, res) => {
  let usersCollection = req.app.get("usersCollection");
  let user = req.body;
  let username = user.name;
  let dbuser = await usersCollection.findOne({ name: username });
  if (!dbuser) {
    return res.send({ status: 400, message: "User doesn't exist!" });
  }
  const isverified = await bcrypt.compare(user.password, dbuser.password);
  if (!isverified) {
    return res.send({ status: 400, message: "Enter correct password!" });
  }

  const userID = dbuser._id;
  const dbUsername = dbuser.name;
  const token = jwt.sign({ id: userID, name: dbUsername }, process.env.TOKEN);
  return res.send({
    status: 200,
    token,
    dbUsername,
    message: "Login Successful!",
  });
});

const getRole = expHandler(async (req, res) => {
  const userName = req.headers.curr_user_name;
  const usersCollection = req.app.get("usersCollection");

  const user = await usersCollection.findOne({ name: userName });
  if (!user) {
    return res.send({ status: 404, message: "User not found" });
  } else {
    return res.send({ status: 200, payload: user.role });
  }
});
userApp.post("/register", registerUser);
userApp.post("/login", loginUser);
userApp.get("/role", verifyToken, getRole);

module.exports = userApp;
