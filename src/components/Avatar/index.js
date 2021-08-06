import React from 'react';
import './UserInfo.css';
import Avatar from '@material-ui/core/Avatar';
import { useStateValue } from '../../StateProvider';

function UserInfo() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="userInfo">
            <Avatar className="avatar" src={user.photoURL}/>
            <h4>{user.displayName}</h4>
        </div>
    )
}

export default UserInfo;
