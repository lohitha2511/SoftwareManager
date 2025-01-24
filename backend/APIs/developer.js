const exp = require("express");
const expHandler = require("express-async-handler");
const { verifyToken, isDev } = require("../Middleware/auth");
const devApp = exp.Router();
const {getProjects}=require("./utils")


devApp.get("/", verifyToken, isDev, getProjects);

module.exports = devApp;
