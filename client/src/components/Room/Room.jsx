import React, { useState } from 'react'

const Room = ({socket}) => {
    const [room, setRoom] = useState("");
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <div>
         <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
    </div>
  )
}

export default Room
