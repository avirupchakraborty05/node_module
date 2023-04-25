// const { json } = require("express");
const { ObjectId } = require("mongodb");
const client = require("../migrations/connect")


const createUser = async (req, res, next)=>{
    const {email,password} = req.data || {};
    // if(!password && password.trim()!=null){
    //     res.status(401).send({massage:"Password can't be null"})
    // }
    console.log("The email is",email,"The passoword is",password)
    await client.connectToDatabase()
    const user =await client.client.db("Store").collection("User").insertOne({email, password})
    console.log(user)
    req.id = user.insertedId
    next()
}
const getusers = async (req, res, next) => {
    client.connectToDatabase()
    const stages = await client.client.db("Store").collection("Users").find().toArray();
    return res.send({ data: stages })
}

const getUserByid = async (req, res, next) => {
    const id = req.id
    const token = req.token
    client.connectToDatabase()
    console.log("The id is", id)
    const stages = await client.client.db("Store").collection("User").findOne({ _id: id });
    console.log(stages)
    res.status(200).send({ "msg": "added successfully", data: stages, token: token,success:true })
}



module.exports = { getusers, createUser, getUserByid}

