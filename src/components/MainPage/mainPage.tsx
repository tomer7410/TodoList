import React from 'react'
import MainModal from './Modal/mainModal'
import Navbar from './navbar/navbar';
import './mainPage.css'
const mainPage = () => {
  return (
    <div className="Main-page" >
    <h1>Welcome to My Todo App</h1>
    <Navbar paths={["My Todos","Todo History"]}></Navbar>
    <MainModal />
    </div>
  )
}

export default mainPage