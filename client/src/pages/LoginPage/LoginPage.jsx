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



<div className='w-full h-screen flex justify-center items-center'>
<div className='w-80 bg-slate-700 p-5'>
  <h1 className='text-2xl text-center my-5 text-white'>Login</h1>
<form className='flex flex-col gap-2'>
<input type="email" value={email} placeholder='Your Email' className='p-2 focus:outline-none' onChange={(e)=>setEmail(e.target.value)} />
<input type="password" value={password} placeholder='Enter 6 Character Password' className='p-2 focus:outline-none' onChange={(e)=>setPassword(e.target.value)} />
<button onClick={(e)=>handleSubmit(e)} className='bg-gray-400 text-white' >Login</button>
<span className='text-gray-200'>If you haven't any account then <Link to="/registration" className='text-white hover:text-gray-200 text-lg '>SignUp</Link> </span>

</form>
</div>
</div>
  )
}

export default LoginPage
