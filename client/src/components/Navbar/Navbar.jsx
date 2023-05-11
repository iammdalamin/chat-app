import React, { useState } from 'react'
import "./Navbar.css"
import { BsThreeDotsVertical,BsFillPlusCircleFill } from "react-icons/bs";
import { getUserDetails, removeSessions } from '../../helpers/SessionHelper'
const Navbar = () => {
  const [toggle , setToggle] = useState(false)

    const user = getUserDetails()
    const Logout = ()=>{
        removeSessions()
    }
  return (
    <>
 
 <nav className='w-full h-10 px-6 py-8 bg-gray-800 text-white flex justify-between items-center  '>
              <div>
                <h1>{user?.data.name}</h1>
              </div>
              <div className='cursor-pointer relative' onClick={()=>setToggle(!toggle)}>
                
                <BsThreeDotsVertical size={25} />
                {
                  toggle&& 
                  <div className='w-52 h-auto bg-white text-black shadow-xl absolute p-2 top-8 right-0 '>
                    <ul className='flex flex-col'>
                      <li>Delete Conversation</li>
                      <li>Report Technical Problem</li>
                    </ul>
                  </div>
                }
              </div>
           </nav>

    </>
   
  )
}

export default Navbar
