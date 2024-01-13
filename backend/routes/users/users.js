const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.use(bodyParser.json());
router.use(express.json());

//user list
const users=[
    {id:0,username:process.env['USERNAM'],password:process.env['PASSWORD']}
]

//users endppoint
router.post('/',(req,res) =>{
    const { username, password } = req.body;
    console.log(req.body)
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      const token = jwt.sign({ userId: user.id }, process.env['SECRET'], { algorithm: 'HS256' },{ expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    } 
});

module.exports = router