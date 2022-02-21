import { Avatar } from '@mui/material'
import React from 'react'
import './sidebarChat.css'

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
        <Avatar/>
        <div className="sidebarChat__info">
            <h2>Some Name</h2>
            <p>Last message</p>
       </div>
    </div>
  )
}

export default SidebarChat