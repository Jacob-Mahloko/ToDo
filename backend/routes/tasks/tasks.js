const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {authToken} =require('../../middlewares')
router.use(express.json());

const tasks=[
    {course:333,description:"A very funny assignnment needs to be finished",date:"2021/10/11",color:'green'},
    {course:332,description:"A very funny assignnment needs to be finished",date:"2021/10/11",color:'blue'},
    {course:330,description:"A very funny assignnment needs to be finished",date:"2021/10/11",color:'gray'},
    {course:331,description:"A very funny assignnment needs to be finished",date:"2021/10/11",color:'red'}    
]
//tasks endpoint
router.get('/:course',authToken,(req,res)=>{
    
    const course=tasks.find(task=>task.course==parseInt(req.params.course));
    if(course && course.description!=''){
        res.json(course)
    }else{
        res.status(404).json({message:"Doesn't exist"})
    }
    
})

module.exports=router

