const exp = require("express");
const userApp = require("./APIs/userApp");
const leaderApp = require("./APIs/leaderApp");
const devApp = require("./APIs/developerApp");
const testApp = require("./APIs/testerApp");
require("dotenv").config();
const cors = require("cors");
const app = exp();

app.use(exp.json());
app.use(cors());

const port = process.env.PORT;

const client = require("mongodb").MongoClient;
client
  .connect(process.env.DBURL)
  .then((client) => {
    const database = client.db("softwareDB");
    const usersCollection = database.collection("users");
    const issueCollection = database.collection("issues");
    const projectsCollection = database.collection("projects");
    app.set("usersCollection", usersCollection);
    app.set("issueCollection", issueCollection);
    app.set("projectsCollection", projectsCollection);
    console.log("Database Connected Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", userApp);
app.use("/leader", leaderApp);
app.use("/developer", devApp);
app.use("/tester", testApp);

app.listen(port, () => {
  console.log(`Running on port: ${port}.`);
});
