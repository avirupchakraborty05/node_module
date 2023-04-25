const useRoute = require("./routes/user_routes")
var express = require('express')

const app = express()
const {connectToDatabase} = require("./migrations/connect")
app.use(useRoute)
app.listen(6000,async()=>{
    console.log("the server is running",3000 )
    await connectToDatabase()
})