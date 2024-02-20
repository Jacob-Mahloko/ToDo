import NavBar from '../../Components/NavBar/NavBar';
import './taskform.css';
import {useState} from 'react';
import { useRef } from 'react';

function TaskForm() {

  const inputName =useRef(null);
  const inputDescription =useRef(null);
  const inputDate =useRef(null);

  const [name,setName]=useState('');
  const [description,setDescription]=useState('')
  const [date,setDate]=useState('');
  const [tasks,setTasks]=useState([]);

  const clear=()=>{
        inputName.current.value=''
        inputDescription.current.value=''
        inputDate.current.value=''
  }
  const addTask=()=>{
    setTasks([...tasks,{task:name,desc:description,time:date}]);
    setDate('');
    setDescription('');
    setName('');
    clear();
  }

  return (
    <div className="TaskForm">
      <NavBar/>
      <div className='container'>
        <h2>Create a Task</h2>
        <label>Name</label>
        <input type='text' id='name'onChange={(event)=>{setName(event.target.value)}} ref={inputName}/>
        <label>Description</label>
        <input type='text' id='description' onChange={(event)=>{setDescription(event.target.value)}} ref={inputDescription}/>
        <label>Due Date</label>
        <input type='text' id='dueDate' onChange={(event)=>{setDate(event.target.value)}}ref={inputDate}/>
        <button onClick={addTask}>Create Task</button>
      </div>
    </div>
  );
}

export default TaskForm;
