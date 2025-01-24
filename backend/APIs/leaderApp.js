const exp = require("express");
const expHandler = require("express-async-handler");
const { verifyToken, isLeader } = require("../Middleware/auth");
const leaderApp = exp.Router();

const getAllProjects = expHandler(async (req, res) => {
  const projectsCollection = req.app.get("projectsCollection");
  const dbProjects = await projectsCollection.find().toArray();
  if (dbProjects) {
    return res.send({ status: 200, payload: dbProjects });
  } else {
    return res.send({ status: 200, payload: [] });
  }
});

leaderApp.get("/", verifyToken, isLeader, getAllProjects);

module.exports = leaderApp;
