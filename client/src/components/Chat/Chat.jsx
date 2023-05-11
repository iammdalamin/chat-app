import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import "./Chat.css"
import InputChat from './InputChat';
import ChatField from '../ChatField/ChatField';
import Room from '../Room/Room';
import Conversation from '../Conversation/Conversation';
import ChatOnline from '../ChatOnline/ChatOnline';
import { getUserDetails } from '../../helpers/SessionHelper';
// const socket = useRef("http://localhost:5001")
const socket = io.connect("http://localhost:5001");
import axios from "axios";

export default function Home() {
  const [conversations, setConversations] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");  const [own, setOwn] = useState(true)
  const [currentChat, setCurrentChat] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const user = getUserDetails()
  const scrollRef = useRef();

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/conversation/" + user?.data._id);
        setConversations(res.data);
        console.log("conversations",conversations);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user?.data._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/messages/" + currentChat?._id);
        setMessages(res.data);
        
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [messages,currentChat]);
  useEffect(() => {
    socket.on("getMessage", (data) => {
      setArrivalMessage({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [arrivalMessage , currentChat]);
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.emit("addUser", user?.data._id);
    socket.on("getUsers", (users) => {
      // console.log(users);
      // setOnlineUsers(
      //   user.followings.filter((f) => users.some((u) => u.userId === f))
      // );
    });
  }, [user]);
  const handleSubmit = async (e) => {
    const message = {
      senderId: user?.data._id,
      text: newMessage,
      conversationId: currentChat?._id,
    };

    const receiverId = currentChat?.members.find(
      (member) => member !== user._id
    );
    socket.emit("sendMessage", {
      senderId: user?.data._id,
      receiverId,
      text: newMessage,
    });
     setMessageInput("")
    try {
      const res = await axios.post("http://localhost:5000/api/v1/message", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  useEffect(() => {
    socket.on('received_msz', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
      
    });
  }, [socket, messages]);


  return (
    <div className='chatBox'>
 <div className='chatContainer'>


<div className="chatBoxLeft">
  <div className="chatBoxWrapper">
    <div className="searchChat">
      <input type="text" /> 
      <button>Search</button>
    </div>
    {conversations?.map((c, i) => (
      <div key={i} onClick={() => setCurrentChat(c)}>
        <Conversation conversation={c} currentUser={user?.data} />
      </div>
    ))}
  
  </div>
</div>
<div className="chatField">
 {
  currentChat? <><div className="messages">
  {messages?.map((m, i)=>{
  console.log("Sender", m);
return  <div key={i} ref={scrollRef}>
              <ChatField message={m} own={m.senderId === user?.data._id}  />
            </div>
})}
  </div>
  <div className="chatBoxBottom">
  <textarea  className="chatMessageInput" placeholder='Write something..' onChange={(e)=>setNewMessage(e.target.value)}></textarea>
  <button className='sendBtn' onClick={
    (e)=>handleSubmit(e)}>Send &#8618;</button>
</div>
</>: "Please select a conversation"
 }
 




</div>


</div>
    </div>

   
  );
}
