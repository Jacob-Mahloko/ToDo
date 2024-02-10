const mongoose=require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    due_date: String,
});

module.exports=taskSchema;

