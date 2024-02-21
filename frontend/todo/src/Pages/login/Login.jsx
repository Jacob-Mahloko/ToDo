import React, { useState } from 'react';
import Footer from '../../Components/footer/footer';
import './Login.css'
import { useAuthStateContext,useAuth, useAuthActionContext } from '../../providers/authProvider/Index';


export default function Login() {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const status=useAuthStateContext();//indicates if user is authenticated
  const {login,logout}=useAuthActionContext();//auth functions

  console.log(status);
  //addition of validators
  const submitForm=(e)=>{
    e.preventDefault()
    login(username,password);
  }

  return (
      <div className='containerLogin'>
        <form onSubmit={submitForm}> 
              <h3 className='login-heading' id='login-heading'>Login</h3>
            <label htmlFor='username'>username</label>
            <input placeholder="username" type='text' id='username' onChange={(e)=>{setUsername(e.target.value)}}/>
            <label htmlFor='password'>password</label>
            <input placeholder="password" type='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>Login</button>
            <span><a href="/">Forgot Password?</a>|<a href="/">Sign Up</a></span>
        </form>

        <Footer/>
       </div>

  )
};
