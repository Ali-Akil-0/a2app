import React from "react";
import "./Chat.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useState } from "react";
import axios from "./axios";

const Chat = ({ messages }) => {
    const [input,setInput]= useState('');
    const sendMessage= async (e)=>{
        e.preventDefault();
        await axios.post('/messages/new',{
                message: input,
                name:"name2",
                timestamp:"Now",
                recieve:false
            
        });
        setInput('');
    }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ....</p>
        </div>
        <div className="chat__headerIcons">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages?.map((message) => (
          <p className={`chat__message ${message.recieve && 'chat__reciever'}`}>
            <span className="chat__name">{message.name}</span>
                {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <AttachFileIcon />
        <form>
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button onClick= {sendMessage} type="submit">Send a message</button>
        </form>
        <KeyboardVoiceIcon />
      </div>
    </div>
  );
};

export default Chat;
