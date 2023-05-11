import React, { useState } from 'react'
import { BsThreeDotsVertical,BsFillPlusCircleFill } from "react-icons/bs";

import { AiOutlineSend } from "react-icons/ai";

const Chat2 = () => {
  const [own , setOwn] = useState(true)
  const [toggle , setToggle] = useState(false)
  const [text , setText] = useState("")

  return (
    <section className='py-16 '>
      <div className="container mx-auto flex flex-wrap  w-full justify-start items-start">
        <div className='relative flex flex-col items-start justify-start w-[32%] gap-5 border-r-2 h-[calc(100vh-135px)] px-4' >
            <input placeholder='Search...' className='w-full py-2 px-3 border border-gray-400 focus:outline-0 rounded-xl' /> 
            <div className='w-full flex justify-start items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 duration-700   '>
                <img className='w-12 h-12 rounded-full object-cover' src="https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="" />
                <h1>John Doe</h1>
            </div>
        </div>
        <div className='  w-[68%] h-[calc(100vh-135px)] bg-gray-400'>
           <div className='w-full h-10 px-6 py-8 bg-gray-800 text-white flex justify-between items-center  '>
              <div>
                <h1>John Doe</h1>
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
           </div>
           <div className={own?'px-6 py-4 flex flex-col w-full items-end h-[calc(100vh-270px)]':'px-6 py-4 flex flex-col w-full  '}>
            <div className=' flex items-end gap-4 '>
              {
                !own&&<img className='w-8 h-8 rounded-full object-cover' src="https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="" />

              }
            <p className={own?"bg-gray-200 inline-block px-4 py-4 rounded-tr-full rounded-l-full":"bg-sky-500 inline-block px-4 py-4 rounded-tl-full rounded-r-full"}>ucimus ab? Dolorum! Lorem ipsum dolor,
              harum sint quis!</p>
            </div>
          <span className='text-xs mt-2 ml-12'>12 Hours</span>
           </div>
           <div className='w-full px-4 flex justify-center items-center gap-2 text-gray-800  ' >
            <BsFillPlusCircleFill className=' cursor-pointer' size={30} />
              <input type="text" value={text} placeholder='Send message...' className='w-full p-3 border border-gray-400 focus:outline-0 rounded-xl' />
              <AiOutlineSend className=' cursor-pointer'  size={30} />
           </div>
        </div>
      </div>
    </section>
  )
}

export default Chat2
