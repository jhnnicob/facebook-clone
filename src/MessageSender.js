import React, {useState} from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleClick = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                 <Avatar className="avatar" src={user.photoURL}/>
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`What's on your mind ${user.displayName.toLowerCase()}`}/>
                    <input 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Image URL (Optional)"/>
                    <input 
                        onClick={handleClick}
                        type="submit" 
                        value="Hidden Submit" />
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCallIcon />
                    <p>Live Video</p>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon />
                    <p>Photo/Video</p>
                </div>
                <div className="messageSender__option">
                    <MoodIcon />
                    <p>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
