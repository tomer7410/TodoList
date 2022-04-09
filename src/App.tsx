import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import MainPage from './components/MainPage/mainPage';
import LoginPage from './components/LoginPage/loginPage'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<MainPage   />}/>
      </Routes>
    </div>
  );
}

export default App;
