const express = require('express');
const router = express.Router();
router.use(express.json());

//tasks endpoint
router.get('/',(req,res)=>{
    res.json({course:"COS 333",description:"A very funny assignnment needs to be finished",date:"2021/10/11",color:'green'})
})

module.exports=router

