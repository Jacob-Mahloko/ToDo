import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar';
import './Login.css'


export default function Login() {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const submitForm=()=>{
    console.log(username,password)
  }
  return (
    <div className='Login'>
        <NavBar/>
        <div className='containerLogin'>
        <form onSubmit={submitForm}> 
            <h3>Login details:</h3>
            <label htmlFor='username'>username</label>
            <input type='text' id='username' onChange={(e)=>{setUsername(e.target.value)}}/>
            <label htmlFor='password'>password</label>
            <input type='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>Login</button>
        </form>
        </div>
       

    </div>
  )
}
