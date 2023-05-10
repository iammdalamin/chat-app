import React from 'react'

const InputChat = ({messageInput, setMessageInput}) => {
  return (
    <input
    type="text"
    value={messageInput}
    onChange={(e) => setMessageInput(e.target.value)}
  ></input>
  )
}

export default InputChat
