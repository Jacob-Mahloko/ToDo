const express = require('express');
const router = express.Router();
router.use(express.json());

//users endppoint
router.get('/',(req,res) =>{
    res.json({username:"Jacob123",password:"password"});
});

module.exports =router