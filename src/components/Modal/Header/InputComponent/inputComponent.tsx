import React from 'react'
import './inputComponent.css'
const inputComponent= ({title}:{title:string}):JSX.Element => {
  return (
   <div className='Input-container'>
     <label>{title}</label>
     <input className='Current-assigment' type="text"  onFocus={()=>{console.log("focus")}}/>
   </div>
  )
}

export default inputComponent