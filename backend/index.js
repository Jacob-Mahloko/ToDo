const express = require('express')
const app = express()
const PORT =3007

const userRouter = require('./routes/users/users');
const tasksRouter = require('./routes/tasks/tasks');

app.use('/user',userRouter);
app.use('/tasks',tasksRouter);

//api listen to a certain port
app.listen(PORT,()=>{
    console.log("server up")
});