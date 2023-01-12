const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')


mongodb.connect(process.env.CONNECTIONSTRING, async function(err, client){
    const db = client.db()
    const results = await db.collection("Pets").find().toArray()
    console.log(results)
})

