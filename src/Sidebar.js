import React from 'react'
import './Sidebar.css';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar,IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__header">
        <Avatar src='./The_Ali.jpg'/>
            <div className="sidebar__headerRight">
                <IconButton>
                     <DonutLargeIcon/>
                 </IconButton>
                 <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                    <SearchIcon/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
        </div>
        <div className="sidebar__chats">
            <div className="sidebar_chatsInside">
             <SidebarChat/>
             <SidebarChat/>
             <SidebarChat/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar