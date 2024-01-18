const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cryt = require('bcrypt');
require('dotenv').config();

router.use(bodyParser.json());
router.use(express.json());

//user list
const users=[
]


router.post('/signup',async (req,res)=>{
  try{
    //create password 
    const salt= cryt.genSalt();
    const hashedPassword= await cryt.hash(req.body.password,salt);

    //check if user already exists
    if(users.find(u=>u.username=== req.body.username)){
      res.send(401).json('username already exists');
    }else{

    //user doesn't exist
      const user={username:req.body.username,hpassword:hashedPassword};
      users.append(user);
      res.status(201).json({message:"user credentials saved"});
    }

  }catch(err){
    console.log(err)
  }
})
//users endppoint
router.post('/login',async (req,res) =>{
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    
    if (user) {
      if(await cryt.compare(req.body.password,u.hpassword)){
        
        const token = jwt.sign({ userId: user.id }, process.env['SECRET'], { algorithm: 'HS256' },{ expiresIn: '1om' });
        res.json({ token });
      }else{
        res.status(401).send('incorrect password');
      }
      
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    } 
});

module.exports = router