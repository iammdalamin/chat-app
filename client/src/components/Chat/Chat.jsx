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
import { BsThreeDotsVertical,BsFillPlusCircleFill } from "react-icons/bs";

import { AiOutlineSend } from "react-icons/ai";
import Navbar from '../Navbar/Navbar';


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

const searchQuery = ()=>{

}
  return (
    <>


    <section className='py-16 shadow-xl'>
      <div className="container mx-auto flex flex-wrap  w-full justify-start items-start">
        <div className='relative bg-slate-500 pt-4 flex flex-col items-start justify-start md:w-[32%] w-[15%] duration-700 gap-5  h-[calc(100vh-135px)] px-4' >
            <input placeholder='Search...' className='w-full py-2 px-3 border border-gray-400 focus:outline-0 rounded-xl' /> 
          
            {conversations?.map((c, i) => (
      <div className='w-full' key={i} onClick={() => setCurrentChat(c)}>
        <Conversation conversation={c} currentUser={user?.data} />
      </div>
    ))}
        </div>



        <div className='  w-[68%] h-[calc(100vh-135px)] bg-gray-400'>

      
       <Navbar />

           {
  currentChat? <><div className="messages">
  {messages?.map((m, i)=>{
return  <div key={i} ref={scrollRef}>
              <ChatField message={m} own={m.senderId === user?.data._id}  />
            </div>
})}
  </div>
  <div className='w-full px-4 flex justify-center items-center gap-2 text-gray-800  ' >
            <BsFillPlusCircleFill className=' cursor-pointer' size={30} />
              <input type="text" value={newMessage} placeholder='Send message...' onChange={(e)=>setNewMessage(e.target.value)} className='w-full p-3 border border-gray-400 focus:outline-0 rounded-xl' />
              <AiOutlineSend className=' cursor-pointer'  size={30} onClick={
    (e)=>handleSubmit(e)} />
           </div>
 
</>: "Please select a conversation"
 }


          
        </div>
      </div>
    </section>




    </>
  );
}
