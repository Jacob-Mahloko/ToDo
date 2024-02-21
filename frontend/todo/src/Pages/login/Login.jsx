import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar';
import './Login.css'
import { useAuthStateContext,useAuth, useAuthActionContext } from '../../providers/authProvider/Index';


export default function Login() {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const status=useAuthStateContext();
  const {login,logout}=useAuthActionContext();


  

  writeDataToLocalStorage()

  const submitForm=(e)=>{
    e.preventDefault()
    login(username,password);
  }

  return (
    <div className='Login'>
        <NavBar/>
        <div className='containerLogin'>
        <form onSubmit={submitForm}> 
            <h3 className='login-heading' id='login-heading'>Login details</h3>
            <label htmlFor='username'>username</label>
            <input type='text' id='username' onChange={(e)=>{setUsername(e.target.value)}}/>
            <label htmlFor='email'>email</label>
            <input type="text" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
            <label htmlFor='password'>password</label>
            <input type='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>Login</button>
        </form>
        </div>
    </div>
  )
}
