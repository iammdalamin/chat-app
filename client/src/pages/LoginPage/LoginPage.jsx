import React, { useState } from 'react'
import { LoginRequest } from '../../ApiRequest/api'
import { Link, useNavigate } from 'react-router-dom'
import { getToken, getUserDetails } from '../../helpers/SessionHelper'
import { redirect } from "react-router-dom";
const LoginPage= () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleSubmit =async (e) =>{
    e.preventDefault()
    const userData = {
        email,
        password
    }
  await LoginRequest(userData)
  const user = await getUserDetails();

  if (user) {
    setEmail("");
    setPassword("");
    navigate("/");
    console.log("LoginRequest==>" + user.toString());
    window.location.reload(true);
  } else {
    console.log(false);
  }
};


  return (
    <div className='reg-page'>

    <div className='reg-box'>
  <h1>Login</h1>
  <form className='reg-form'>
  <input type="email" value={email} placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} />
  <input type="password" value={password} placeholder='Enter 6 Character Password' onChange={(e)=>setPassword(e.target.value)} />
  <button className='btn' onClick={(e)=>handleSubmit(e)} >Login</button>
  <span style={{color:"#666"}}>If you haven't any account then <Link to="/registration" style={{fontSize:"18px"}}>SignUp</Link> </span>
  </form>
    </div>
  </div>
  )
}

export default LoginPage
