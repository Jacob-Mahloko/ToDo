const jwt = require('jsonwebtoken');
const user = require('../models/users');


require('dotenv').config()
console.log(process.env.SECRET)
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};


const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user=null;
        next();
      } else {
        console.log(decodedToken);
        let u = await user.findById(decodedToken.id);
        res.locals.user=u;
        next();
      }
    });
  } else {
    res.locals.user=null;
    next();
  }
};
module.exports = { requireAuth ,checkUser};