import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { getUserDetails, removeSessions } from '../../helpers/SessionHelper'
const Navbar = () => {
    const user = getUserDetails()
    const Logout = ()=>{
        removeSessions()
    }
  return (
    <div className='navbar'>
      <div className="navBrand"><Link to="/" >Chat</Link></div>
      <ul>
        <li><Link to="/">{user ? user.data.name : <Link to="/login">Login</Link>}</Link></li>
        <li style={{cursor:"pointer"}} onClick={()=> Logout()}>Logout</li>
      </ul>
    </div>
  )
}

export default Navbar
