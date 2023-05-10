import React from 'react'
import "./ChatOnline.css"
const ChatOnline = () => {
  return (
    <div className='chatOnlineWrapper'>
      <img src="https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="" className="chatOnlineImg" />
      <div className="onlineBadge"></div>
      <span className="chatName">Mike Tyson</span>
    </div>
  )
}

export default ChatOnline
