import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import { getUserDetails, removeSessions } from '../../helpers/SessionHelper'
const Navbar = () => {
    const user = getUserDetails()
    const Logout = ()=>{
        removeSessions()
    }
  return (
    <>
 
    <nav className='bg-sky-500 py-5'>
      <div className="container mx-auto flex justify-between text-white">
        <div><NavLink to="/" className={`text-xl font-bold `}>Chat</NavLink></div>
        <ul>
        <li>{user ? user.data.name : <NavLink to="/login" >Login</NavLink>}</li>
        <li onClick={()=> Logout()} className='cursor-pointer'>Logout</li>
      </ul>
      </div>
    </nav>
    </>
   
  )
}

export default Navbar
