import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import { useStateValue } from './StateProvider';

function Post({username, timestamp, message, image, profilePic}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar className="post__avatar" src={profilePic}/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>    
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__img">
                <img src={image} />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon /><span>Like</span>
                </div>
                <div className="post__option">
                    <ChatBubbleIcon /><span>Comment</span>
                </div>
                <div className="post__option">
                    <NearMeIcon /><span>Share</span>
                </div>
            </div>
        </div>
    )
}

export default Post;
