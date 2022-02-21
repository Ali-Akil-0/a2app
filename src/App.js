import React, { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';
import { useState } from 'react';


function App() {
  const [messages, setMessages]=useState([])
  useEffect(()=>{
    axios.get('/messages/sync').then(response=>{
      console.log(response.data);
      setMessages(response.data);
    })
  },[]);
  useEffect(()=>{
    const pusher = new Pusher('79a919150a084ef9c379', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      setMessages([...messages,newMessage]);
    });
    return()=>{
      channel.unsubscribe();
      channel.unbind_all();
    }

  },[messages])
  console.log(messages);
  return (
    <div className="app">
    <div className="app__body">
    <Sidebar/>
    <Chat messages={messages}/>
    </div>
    </div>
  );
}

export default App;
