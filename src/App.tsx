import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainModal from './components/Modal/mainModal'
import Navbar from './components/navbar/navbar';
import {ModalType} from './interfaces/interfaces'
function App() {
  return (
    <div className="App">
      <div className='Top-page'>
      <h1>Welcome to My Todo App</h1>
      <Navbar paths={["My Todos","Todo History"]}></Navbar>
      </div> 
      <div className="Main-page" style={{height:"d"}}>
          <MainModal/>
      </div>
     
    </div>
  );
}

export default App;
