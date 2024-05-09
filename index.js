const express = require('express');
const app = express();
const PORT = 5000;


app.get('/',(req,res)=>{
    res.status(200).send("HOME");
    console.log("Home...")
})

app.listen(PORT,()=>{
    console.log("server started "+PORT)
})











