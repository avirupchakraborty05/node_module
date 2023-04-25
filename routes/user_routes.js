const Router = require("express")
const bodyPaser = require("body-parser");
const { ObjectId } = require("mongodb");
const app = Router()
app.use(bodyPaser.json())
const {getuers, getUserByid} = require("../Controllers/userControllers")
const {createUser} = require("../Controllers/userControllers");
const { validatorRegister } = require("../helper/validate");
const { generateWebToken, verifyWebToken } = require("../middlewires/token-middlewire");
app.post("/api/user/create",[validatorRegister, createUser, generateWebToken, getUserByid]) // getUserByid


const dbName = "Store"
app.get("/api/user",[verifyWebToken,]) //getusers

app.get("/api/user/:id",async(req,res,next)=>{
    const id = req.params.id
    client.connectToDatabase()
    const stages = await  client.client.db("Store").collection("Users").findOne({_id:ObjectId(`${id}`)});
    return res.send({data:stages})
})

app.post("/api/user/create",[validatorRegister ,createUser])

module.exports = app;