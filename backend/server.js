const exp=require('express')
require("dotenv").config()
const app=exp()
app.use(exp.json())
const port=process.env.PORT
const client=require("mongodb").MongoClient
client.connect(process.env.DBURL).then((client)=>{
    const database=client.db("softwareDB")
    const usersCollection=database.collection("users")
    const issueCollection=database.collection("issues")
    const projectsCollection=database.collection("projects")
    app.set("usersCollection",usersCollection)
    app.set("issueCollection",issueCollection)
    app.set("projectsCollection",projectsCollection)
    console.log("database connected")


}).catch((err)=>{
    console.log(err)
    
})





app.listen(port,()=>{
    console.log("running")
})

