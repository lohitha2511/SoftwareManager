const exp = require("express");
const expHandler = require("express-async-handler");
const { verifyToken, isTester } = require("../Middleware/auth");
const testApp = exp.Router();

const {getProjects}=require("./utils")
const getIssues=expHandler(async(req,res)=>{
const issueCollection=req.app.get("issueCollection")
const dbProjectID=req.body.curr_projectId
const dbIssue=await issueCollection.find({projectID:dbProjectID}).toArray()
if (dbIssue) {
    return res.send({ status: 200, payload: dbIssue });
  } else {
    return res.send({ status: 200, payload: [] });
  }
})


testApp.post("/issues",verifyToken, isTester, getIssues)


testApp.get("/", verifyToken, isTester, getProjects);





module.exports=testApp

