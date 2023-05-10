import React, { useEffect, useState } from 'react'
import "./Conversation.css"
import axios from "axios";

const Conversation = ({conversation,currentUser}) => {
  const [user,setUser] = useState(null)
  useEffect(()=>{
    const getUser = async () => {
      try {
        const friendId = await conversation?.members.find((m)=>m !==currentUser._id)
console.log("friendId",conversation?.members);
        const res = await axios.get(`http://localhost:5000/api/v1/user/${friendId}` );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser]);

  return (
    <div className='conversation'>
      <img src="https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="" className="conversationImg" />
      <span className="conversationName">{user?.data.name}</span>
    </div>
  )
}

export default Conversation
