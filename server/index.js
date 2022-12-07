require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8080
const path = require('path')
const DB_URi = process.env.DATABASE
const mongoClient =require('mongodb').MongoClient;
var db


//middleware

app.use(cors())
app.use(express.json)
app.use(express.urlencoded({extended:true}))

//listen port and connect database
app.listen(PORT,()=>{
    console.log(`runnibg on port ${PORT}`)
}
    // ,()=>{
    // mongoClient.connect(DB_URi,{useNewUrlparser:true},(err,result)=>{
    // if(err){
    //     console.log("cannot connect to database")
    // }
    // db = result.db('IOT-database').collection('User-device')
    // })
    // console.log('connected to database!!')
    )

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,'./main/server.html'))
// })