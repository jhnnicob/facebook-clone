import React from 'react';
import './SidebarRight.css';
import Event from './event'
import FriendRequest from './friendRequest';
function SidebarRight() {
    return (
        <div className="sidebarRight">
            <Event />
            <FriendRequest />
        </div>
    )
}

export default SidebarRight
