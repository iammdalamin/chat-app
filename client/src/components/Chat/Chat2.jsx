import React, { useState } from 'react'
import { MdDeleteSweep } from "react-icons/md";

const Chat2 = () => {
  const [own , setOwn] = useState(true)
  return (
    <section className='py-16 '>
      <div className="container mx-auto flex flex-wrap  w-full justify-center items-center">
        <div className='relative flex flex-col items-start justify-start w-[32%] gap-5 border-r-2 h-screen px-4' >
            <input placeholder='Search...' className='w-full py-2 px-3 border border-gray-400 focus:outline-0 rounded-xl' /> 
            <div className='w-full flex justify-start items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 duration-700   '>
                <img className='w-12 h-12 rounded-full object-cover' src="https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="" />
                <h1>John Doe</h1>
            </div>
        </div>
        <div className='  w-[68%] h-screen bg-gray-400 '>
           <div className='w-full h-10 px-6 py-8 bg-gray-800 text-white flex justify-between items-center'>
              <div>
                <h1>John Doe</h1>
              </div>
              <div className='cursor-pointer'>
                
                <MdDeleteSweep size={25} />
              </div>
           </div>
           <div className='px-6 py-4 flex flex-col w-2/3'>
            <div className=' flex items-end gap-4 '>
            <img className='w-8 h-8 rounded-full object-cover' src="https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="" />
            <p className='bg-sky-500 inline-block px-4 py-4 rounded-tl-full rounded-r-full '>ucimus ab? Dolorum! Lorem ipsum dolor,
              harum sint quis!</p>
            </div>
          <span className='text-xs mt-2 ml-12'>12 Hours</span>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Chat2
