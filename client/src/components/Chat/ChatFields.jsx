import React from 'react'

const ChatField = ({messages}) => {
  return (
    <>
    <ul className='chat-lists'>
    
       
        {messages.map((message, i)=>{
           return <li key={i}>{message}</li>
        })}
      
    </ul>
    
    </>
  )
}

export default ChatField
