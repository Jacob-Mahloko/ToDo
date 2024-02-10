const express = require('express');
const mongoose = require('mongoose');
const cookieParser=require('cookie-parser');
const { requireAuth ,checkUser} = require('./middlewares/authMiddleware');
const app = express();

require('dotenv').config();


const authRoutes=require('./routes/authRoutes');
const tasksRoutes=require('./routes/tasksRoutes');


// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection

const dbURI = process.env.MongoDBConnString;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3005))
  .catch((err) => console.log(err));

// routes
app.get('*',checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth,(req, res) => res.render('smoothies'));
app.use(authRoutes);
app.use(tasksRoutes);

