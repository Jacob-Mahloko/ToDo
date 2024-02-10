const user = require('../models/users');

const handleErrors = (err)=>{
  
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

module.exports.tasks_create= async (req,res)=>{
    try {

        const {username,tasks}=req.body;

        //check if user exists
        const u = await user.find({username:username});
        if (!u) {
          throw new Error('User doesn\'t Exists');
        }
      
      let filter,setter,result;
      
      //Add task 
      if(u[0].tasks.length===0){
        
        //User has no tasks
        console.log("Doesn't exist");
        filter= {username:username};
        setter={$set: {tasks: tasks}}
        result=await user.updateOne(filter,setter);
        res.status(201).send(result);
      }else{
        //user task not empty
        const us=await user.find({$and : [{username:username},{'tasks.course':tasks[0].course}]});
        if(us.length===0){
          //user has no task for a specific course
          filter= {username:username};
          setter={$push: {tasks: tasks}}
          result=await user.updateOne(filter,setter);
          return res.status(201).send(result);
        }else{
          //user has tasks for specific course
          console.log("exists");
          filter= {$and: [{username:username},{'tasks.course':tasks[0].course}]};
          setter={$push: { 'tasks.$.tasks': { $each:tasks[0].tasks  } }}
          result=await user.updateOne(filter,setter);
          res.status(201).send(result);
        }
      }
       
      //status update
      if(result.nModified===0){
        res.status(400).send(`Unsuccessful ${course}`);
      }else {
        res.status(201).send(result);
      }
    }catch(err){
      res.json(handleErrors(err));
    }
}

//not functioning correctly
module.exports.register_course= async (req,res)=>{
  try {
    const { username, courses } = req.body;
    
    const u = await user.find({
      'username': username }
    );

    if (!u) {
      return res.status(404).json({ error: 'User not found' });
    }

    let result,filter,setter;
    if(u[0].courses.length==0){
      filter={username:username};
      setter={$set: {courses:courses}}
      result=await user.updateOne(filter,setter);
    }else{
      filter={username:username};
      setter={$push: {courses:courses}}
      result=await user.updateOne(filter,setter);

    }

    res.status(200).json({ message: 'Courses registered successfully' });
  
  } catch (error) {
    console.log(error)
    res.json(error);
  }
}


module.exports.tasks_from_course= async (req,res) =>{
  
  const {username,course}=req.body;
  
  
  const result=await user.aggregate([
    {
      $match: {
        'username': username,
        'tasks.course': course.toLowerCase()
      }
    },
    {
      $project: {
        'tasks': {
          $filter: {
            input: '$tasks',
            as: 'task',
            cond: { $eq: ['$$task.course',course.toLowerCase()] }
          }
        },
        _id: 0
      }
    }
  ]);

  result.length===0? res.json({message:"no tasks available"}): res.json(result)
}

module.exports.tasks_all= async (req,res) =>{
  try{
    const {username}=req.body;
  const result=await user.aggregate([
    {
      $match: {
        'username': username,
      }
    },
    {
      $project: {
        'tasks': 1,
        _id: 0
      }
    }
  ]);
  
  res.json(result[0].tasks)

  }catch(err){
    res.json(handleErrors(err));
  }
  
}