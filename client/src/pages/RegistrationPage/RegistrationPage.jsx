import React, { useState } from 'react'
import "./RegistrationPage.css"
import { useRegistrationUserMutation } from '../../Features/userApi'
import { SignupRequest } from '../../ApiRequest/api'
import { Link } from 'react-router-dom'
const RegistrationPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    const handleSubmit =async (e) =>{
        e.preventDefault()
        const userData = {
            name,
            email,
            password
        }
        SignupRequest(userData)
    }
 
  return (
    <div className='reg-page'>

      <div className='reg-box'>
    <h1>Sign Up</h1>
    <form className='reg-form'>
    <input type="text" value={name} placeholder='Your Name' onChange={(e)=>setName(e.target.value)} /> 
    <input type="email" value={email} placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" value={password} placeholder='Enter 6 Character Password' onChange={(e)=>setPassword(e.target.value)} />
    <button className='btn' onClick={(e)=>handleSubmit(e)} >Sign Up</button>
    <span style={{color:"#666"}}>If you haven't any account then <Link to="/login" style={{fontSize:"18px"}}>SignUp</Link> </span>

    </form>
      </div>
    </div>
  )
}

export default RegistrationPage
