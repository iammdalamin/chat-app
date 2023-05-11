import React, { useEffect, useState } from 'react'
import "./Conversation.css"
import axios from "axios";

const Conversation = ({conversation,currentUser, toggle}) => {
  const [user,setUser] = useState(null)
  useEffect(()=>{
    const getUser = async () => {
      try {
        const friendId = await conversation?.members.find((m)=>m !==currentUser._id)
// console.log("friendId",conversation?.members);
        const res = await axios.get(`https://chat-app-hj46.onrender.com/api/v1/user/${friendId}` );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser]);

  return (
  


<div className='w-full flex justify-start items-center gap-2  p-2 cursor-pointer  hover:bg-gray-200 duration-700  rounded-full md:rounded-none  '>
<img className='w-10 h-10  rounded-full object-cover' src="https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="" />
{
  toggle?"":<h1 className='hidden md:block' >{user?.data.name}</h1>

}
</div>
  )
}

export default Conversation
