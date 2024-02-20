import React, { useState } from 'react';
import Footer from '../../Components/footer/footer';
import './Login.css'
import { useAuthStateContext,useAuth, useAuthActionContext } from '../../providers/authProvider/Index';


export default function Login() {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const status=useAuthStateContext();
  const {login,logout}=useAuthActionContext();

  console.log(status);
  const writeDataToLocalStorage=()=>{
    let users=[
      {
        username:'user1',
        password:'password1'
      },
      {
        username:'user2',
        password:'password2'
      },
      {
        username:'user3',
        password:'password3'
      }
    ];

    users=JSON.stringify(users)
    localStorage.setItem('users',users);
  }

  writeDataToLocalStorage()

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
            <label htmlFor='email'>email</label>
            <input placeholder="email" type="text" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
            <label htmlFor='password'>password</label>
            <input placeholder="password" type='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>Login</button>
            <span><a href="/">Forgot Password?</a>|<a href="/">Sign Up</a></span>
        </form>
<<<<<<< HEAD
        <Footer/>
       </div>
=======
        </div>
    </div>
>>>>>>> 4a438b21ab614204ac9d064133c18dbdfb5e5f4c
  )
};
