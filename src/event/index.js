import React from 'react';
import EventOption from '../eventOption';
import './event.css';

function Event() {
    return (
        <div className="event">
            <div className="event__header">
                <h3>Events</h3>
                <span>See All</span>
            </div>
            <EventOption />
            <EventOption />
        </div>
    )
}

export default Event;
