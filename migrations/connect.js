const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://avirupchakraborty05:aMmquVRxMzrhAknO@cluster0.j9hyg5z.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
const connectToDatabase = async()=>{
    await client.connect().then(()=>{
        console.log("connected")
    }).catch((error)=>{
        console.log(new Error(error))
    })
}

module.exports= {client,connectToDatabase}