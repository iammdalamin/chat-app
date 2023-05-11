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
    // <div className='reg-page'>

    //   <div className='reg-box'>
    // <h1>Sign Up</h1>
    // <form className='reg-form'>
    // <input type="text" value={name} placeholder='Your Name' onChange={(e)=>setName(e.target.value)} /> 
    // <input type="email" value={email} placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} />
    // <input type="password" value={password} placeholder='Enter 6 Character Password' onChange={(e)=>setPassword(e.target.value)} />
    // <button className='btn' onClick={(e)=>handleSubmit(e)} >Sign Up</button>
    // <span style={{color:"#666"}}>If you haven't any account then <Link to="/login" style={{fontSize:"18px"}}>Login</Link> </span>

    // </form>
    //   </div>
    // </div>
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-80 bg-slate-700 p-5'>
        <h1 className='text-2xl text-center my-5 text-white'>Sign Up</h1>
    <form className='flex flex-col gap-2'>
    <input type="text" value={name} placeholder='Your Name' className='p-2 focus:outline-none' onChange={(e)=>setName(e.target.value)} /> 
     <input type="email" value={email} placeholder='Your Email' className='p-2 focus:outline-none' onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" value={password} placeholder='Enter 6 Character Password' className='p-2 focus:outline-none' onChange={(e)=>setPassword(e.target.value)} />
   <button onClick={(e)=>handleSubmit(e)} className='bg-gray-400 text-white' >Sign Up</button>
    <span className='text-gray-200'>If you haven't any account then <Link to="/login" className='text-white hover:text-gray-200 text-lg '>Login</Link> </span>

   </form>
      </div>
    </div>
  )
}

export default RegistrationPage
