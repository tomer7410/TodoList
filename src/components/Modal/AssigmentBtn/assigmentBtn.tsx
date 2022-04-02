import React from 'react'
import './assigmentBtn.css'
function assigmentBtn({color,title}:{color:string,title:string}) {
  return (
    <div style={{borderColor:color}} className="Assigment-btn-container">
      <label className='Assigment-btn' style={{color:color}}>{title}</label>
    </div>
  )
}

export default assigmentBtn