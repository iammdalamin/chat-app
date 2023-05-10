import React from 'react'
import "./ChatField.css";
import {format} from "timeago.js"
const ChatField = ({own,message}) => {
  console.log("own", own);
  return (
    <div className='chatFieldWrapper'>
      <div className={own?"own":"chat"}>
        {
          !own&&<img className='chatImg' src="https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="" />

        }
        <div className='textWrapper'>
        <p className='chatMessage'>{message.text}</p>
        <span>{format(message.createdAt)}</span>
        </div>
        

      </div>
    </div>
  )
}

export default ChatField
