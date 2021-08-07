import React from 'react';
import './FriendRequestList.css';
import { Avatar } from '@material-ui/core';

function FiendRequestList() {
    return (
        <div className="fiendRequestList">
            <div className="fiendRequestList__header">
                <h4>Friend Requests</h4>
                <span>See All</span>
            </div>
            <div className="fiendRequestList__body">
                <p>2 weeks</p>
                <div className="fiendRequestList__body__middle">
                    <Avatar />
                    <div className="fiendRequestList__info">
                        <div className="fiendRequestList__details">
                            <h5>John Doe</h5>
                            <span>1 mutual friend</span>
                        </div>
                        <div className="fiendRequestList__info__button">
                            <button>Confirm</button>
                            <button className="gray">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiendRequestList;
