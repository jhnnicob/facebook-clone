import React from 'react';
import './eventOption.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

function EventOption() {
    return (
        <div className="eventOption">
            <div className="eventOption__calendarWidget">
                <p>13</p>
                <p>Sept</p>
            </div>
            <div className="eventOption__details">
                <h5>100 Days in Javascript</h5>
                <div className="eventOption__location">
                    <LocationOnOutlinedIcon />
                    <p>Lions Gate</p>
                </div>
                <span>Details</span>
            </div>
        </div>
    )
}

export default EventOption
