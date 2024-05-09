const dotenv = require('dotenv');
dotenv.config();
const db = require('./config/db.js')
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const PORT = process.env.PORT;
db.connectDB();
app.use(bodyparser.json());


app.get('/',(req,res)=>{
    res.status(200).send("HOME");
    console.log("Home...")
})

app.post('/new-product',(req,res)=>{
    const result = req.body
    res.status(200).send({"status":"true","message":result})
})

app.listen(PORT,()=>{
    console.log("server started "+PORT)
})











