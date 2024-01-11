const express = require('express')
const app = express()

app.get('/',(req,res) =>{
    res.send("Hello world")
})
app.listen(3007,()=>{
    console.log("server up")
})