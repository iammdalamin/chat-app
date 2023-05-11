import React from 'react'
import "./ChatField.css";
import {format} from "timeago.js"
const ChatField = ({own,message}) => {
  return (
 

<div className={own?'px-6 py-4 flex flex-col w-full items-end':'px-6 py-4 flex flex-col w-full  '}>
<div className=' flex items-end gap-4 '>
  {
    !own&&<img className='w-8 h-8 rounded-full object-cover' src="https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="" />

  }
<p className={own?"bg-gray-200 inline-block px-4 py-4 rounded-tr-full rounded-l-full":"bg-sky-500 inline-block px-4 py-4 rounded-tl-full rounded-r-full"}>{message.text}</p>
</div>
<span className='text-xs mt-2 ml-12'>{format(message.createdAt)}</span>
</div>
  )
}

export default ChatField
