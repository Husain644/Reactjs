import React, { useState } from "react";
import { io } from "socket.io-client";
import './chat.css'
const socket = io.connect("http://localhost:8000/userio");


const ChatUI=()=>{
     const [msg,setMsg]=useState('...')
     const [text,setText]=useState('')
     socket.on('resp',(data)=>{setMsg(data)})
     const send=()=>{
      socket.emit('msg_from_client',text)
     }

  return(
    <div>
          <h5>{msg}</h5>
          <input placeholder="enter text" onChange={(e)=>{setText(e.target.value)}}/>
          <button onClick={()=>{send()}}>
            send data
          </button>
    </div>
  )
}

export default ChatUI;
