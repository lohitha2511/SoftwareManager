const expHandler=require("express-async-handler")



const getProjects = expHandler(async (req, res) => {
  const username = req.headers.curr_user_name;
  const usersCollection = req.app.get("usersCollection");
  const projectsCollection = req.app.get("projectsCollection");
  const dbuser = await usersCollection.findOne({ name: username });
  const projectIDs = dbuser.projects;
  let resArr = [];
  for (let index = 0; index < projectIDs.length; index++) {
    const reqID = projectIDs[index];
    const project = await projectsCollection.findOne({ _id: reqID });
    resArr.push(project);
  }
  if (resArr) {
    return res.send({ status: 200, payload: resArr });
  } else {
    return res.send({ status: 200, payload: [] });
  }
});

module.exports={getProjects}