import React from 'react'
import './Task.css'
import NavBar from '../NavBar/NavBar'
import Tile from '../Tile/Tile'
export default function Task() {

  const taskArray=[
    {name:'Eat',desc:'dessert',time:'today',module:'Cos 702'},{name:'Grind',desc:'main',time:'tomorrow',module:'Cos 701'},{name:'Rest',desc:'starter',time:'weekend',module:'Cos 700'}
  ]
  return (
    <div className='Task'>
        <NavBar/> 
        <div className='containerTile'>
        {taskArray.map((value) => {return <Tile title={value.name} description={value.desc} dueDate={value.time} module={value.module}/>})}
        </div>
        
    </div>
  )
}
