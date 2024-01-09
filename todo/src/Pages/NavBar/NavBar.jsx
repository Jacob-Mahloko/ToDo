import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import TaskForm from '../taskform/taskform'
export default function NavBar() {
  return (
    <div className='navbar'>
        <ul>
            <li>
                <Link to='/create'>Create Task</Link>
            </li>
            <li>
                <Link to='/tasks'>Tasks</Link>
            </li>
            <li>
                <Link to='/login'>Log Out</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    </div>
  );
}