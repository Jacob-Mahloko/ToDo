const mongoose=require('mongoose');
const {isEmail}=require('validator');
const bcrypt =require('bcrypt');
const taskSchema=require('./tasks');


const userSchema=new mongoose.Schema(
    {
        username : {
            type: String,
            required: [true,'username is required'],
            unique: true,
            lowercase:true
        },
        email:{
            type: String,
            required: [true,'email is required'],
            unique: true,
            lowercase:true
        },
        password:{
            type:String,
            required:[true,'password is required'],
            minlength: [8,'password minimum length is 8']
        },
        courses:[
            {type:String,lowercase:true}
        ],
        tasks: [
            {
              course: {type: String,lowercase:true},
              tasks: [taskSchema],
            },
          ]

    }
);

//static method to login user

userSchema.statics.login= async function(username,password){
    const u=await this.findOne({username});
    if(u){
        if(await bcrypt.compare(password,u.password)){
            return u;
        }

        throw Error('incorrect password');
    }

    throw Error('incorrect username');
}
userSchema.pre('save',async function(next){
    this.password=await bcrypt.hash(this.password,10);
    next();
});

const user=mongoose.model('user',userSchema);

module.exports =user;