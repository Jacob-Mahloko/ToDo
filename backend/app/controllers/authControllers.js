const user = require('../models/users');
const jwt = require('jsonwebtoken');


const handleErrors = (err)=>{
    if(err.message.includes('incorrect')){
        let errors={password:'',username:''};
        if(err.message.includes('username')){
            errors.username='incorrect username';
        }
        if(err.message.includes('password')){
            errors.password='incorrect password';
        }
        return errors;
    }

    if(err.code==11000){
        let errors={email:'',username:''};
        if(err.message.includes('username')){
            errors.username='username has already been used';
        }
        if(err.message.includes('email')){
            errors.email='email has already been used';
        }
        return errors;
    }

    if(err.message.includes('user validation failed')){
      let errors={email:'',password:'',username:''};
      
      Object.values(err.errors).forEach(({properties}) => {
        errors[properties.path]=properties.message;
      });
      return errors;
    }
  
}


const createToken=(id)=>{
    console.log(process.env.TOKEN_SECRET);
    return jwt.sign({id},'theSecret',{expiresIn:3*24*60*60});
}
module.exports.signup_get=(req,res)=>{
    res.render('signup');
}

module.exports.signup_post= async (req,res)=>{
    const {username,email,password}=req.body;
    
    try {
        const u=await user.create({username,email,password});
        const token =createToken(u._id);
        res.cookie('jwt',token,{httpOnly:true,maxAge:3*24*60*60*1000});
        res.json({user:u._id});
    } catch (error) {
        const err=handleErrors(error);
        res.json({err});
    }
}

module.exports.login_post=async (req,res)=>{
    const {username,password}=req.body;
    
    try {
        const u = await user.login(username,password);
        const token = createToken(u._id);
        res.cookie('jwt',token,{httpOnly:true,maxAge:3*24*60*60*1000});
        res.json({user:u._id});
    } catch (error) {
        const err=handleErrors(error);
        res.status(400).json({err})
    }
}

module.exports.login_get=(req,res)=>{
    res.render('login');
}

module.exports.logout_get=(req,res)=>{
    res.cookie('jwt','',{Expires:1});
    res.redirect('/');
}