const jwt = require('jsonwebtoken');
require('dotenv').config();




const authToken=(req,res,next)=>{
    
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  console.log(process.env['SECRET'])
  jwt.verify(token, process.env['SECRET'],(err, user) => {
    if (err) {
        console.log(err)
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  });
}

const authPage=(permissions)=>{
    return (req,res,next)=>{
        console.log(req.body.role)
        const userRole=req.body.role;
        if (permissions.includes(userRole)){
            next();
        }else{
            return res.status(401).json({messgae:'No permission to access'})
        }
    }
}

const authTask=(req,res,next)=>{
    const courseNumber=parseInt(req.params.number);
    if(req.body.courses.includes(courseNumber)){
        next()
    }else{
        return res.status(401).json({message:'No access Course'})
    }
}

module.exports={authToken}