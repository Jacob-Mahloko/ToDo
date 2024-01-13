const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT =3007

app.use(bodyParser.json());

const userRouter = require('./routes/users/users');
const tasksRouter = require('./routes/tasks/tasks');

app.use('/login',userRouter);
app.use("/tasks",tasksRouter);


//api listen to a certain port
app.listen(PORT,()=>{
    console.log("server up")
});