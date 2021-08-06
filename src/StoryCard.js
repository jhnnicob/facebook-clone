import { Avatar } from '@material-ui/core';
import React from 'react';
import './StoryCard.css';
import AddIcon from '@material-ui/icons/Add';

function StoryCard({name, profileSrc, imgSrc, index}) {
    return (
        index === 0 ? (
            <div>
                <div 
                    className="storyCard storyCard--active"
                    style={{backgroundImage: `url(${imgSrc})`}}>
                    <div className="createStory">
                        <AddIcon fontSize="large"/>
                        <span>Create Story</span>
                    </div>
                </div>
               
            </div>
        ): (
            <div 
                className="storyCard"
                style={{backgroundImage: `url(${imgSrc})`}}>
                <Avatar src={profileSrc} />
                <h4>{name}</h4>
            </div>
        )
        
    )
}

export default StoryCard;
