const jwt = require("jsonwebtoken");
const expHandler = require("express-async-handler");
require("dotenv").config();
const tkn = process.env.TOKEN;

const verifyToken = (req, res, next) => {
  const tokenString = req.headers.authorization;
  const token = tokenString.split(" ")[1];
  if (token) {
    jwt.verify(token, tkn, (err, decoded) => {
      if (err) {
        return res.send({ status: 403, message: "Unauthorized Access!" });
      } else {
        next();
      }
    });
  } else {
    return res.send({ status: 401, message: "Please login!" });
  }
};

const isDev = expHandler(async (req, res, next) => {
  const username = req.headers.curr_user_name;
  const usersCollection = req.app.get("usersCollection");
  const dbuser = await usersCollection.findOne({ name: username });
  if (dbuser && dbuser.role === "Developer") {
    next();
  } else {
    return res.send({ status: 403, message: "Unauthorized Access!" });
  }
});

const isTester = expHandler(async (req, res, next) => {
  const username = req.headers.curr_user_name;
  const usersCollection = req.app.get("usersCollection");
  const dbuser = await usersCollection.findOne({ name: username });
  if (dbuser && dbuser.role === "Tester") {
    next();
  } else {
    return res.send({ status: 403, message: "Unauthorized Access!" });
  }
});

const isLeader = expHandler(async (req, res, next) => {
  const username = req.headers.curr_user_name;
  const usersCollection = req.app.get("usersCollection");
  const dbuser = await usersCollection.findOne({ name: username });
  if (dbuser && dbuser.role === "Leader") {
    next();
  } else {
    return res.send({ status: 403, message: "Unauthorized Access!" });
  }
});

module.exports = { verifyToken, isDev, isLeader, isTester };
