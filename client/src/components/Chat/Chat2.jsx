import React from 'react'
import { BiSearch } from "react-icons/bi";

const Chat2 = () => {
  return (
    <section className='py-16'>
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row  w-full justify-center items-center">
        <div className='relative flex flex-col items-center justify-center md:w=[32%] w-full ' >
            <input placeholder='Search...' className='w-2/3 py-2 px-3 border border-gray-400 focus:outline-0' /> 
            <div className='w-full flex justify-start items-center'>
                <img className='w-12 h-12 rounded-full object-cover' src="https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="" />
                <h1>John Doe</h1>
            </div>
        </div>
        <div className=' flex-initial w-[68%] bg-black'>
    <h1>Hello</h1>
        </div>
      </div>
    </section>
  )
}

export default Chat2
