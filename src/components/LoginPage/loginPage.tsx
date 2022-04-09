import React,{useState} from 'react'
import './loginPage.css'
import LoginButton from '../MainPage/Modal/Body/AssigmentComponent/AssigmentBtn/assigmentBtn'
import { loginUser } from '../../services/userService'
import { User } from '../../interfaces/interfaces'
import userSlice from '../../features/userSlice'
const LoginPage =  () => {
  const [email,setEmail]=useState<string>("")
  const [password,setPassword]=useState<string>("")
  const handleLogin= async()=>{
    if(validateForm(email,password)){
      const user:User={
        email:email,
        password:password
      }
      let data=await loginUser(user)
      console.log(data);
      
    }
   
  }
  const validateForm=(email:string|undefined,password:string|undefined):boolean=>{
    let isValid:boolean=true
    if(!email){isValid=false; alert("email address is missing")}
    if(!password){isValid=false;alert("password  is missing")} 
    return isValid
  }
  const handleChangeInput=((e: React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.name=="email"){
     setEmail(e.target.value)
    }else{
      setPassword(e.target.value)
    }
  })

  return (
    <div className='Login-container'>
        <div className='Header-container'><p>Sign In</p></div>
        <form className='Grid-container'>
            <label className='Grid-item'>Email:</label>
            <input name="email" className='Grid-item' value={email} onChange={handleChangeInput}></input>
            <label className='Grid-item'>Password:</label>
            <input name="password"type="password"  value={password} onChange={handleChangeInput} className='Grid-item'></input>
        </form>
       <button type="button" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage