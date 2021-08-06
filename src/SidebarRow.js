import React from 'react';
import './SidebarRow.css';

function SidebarRow({Icon, name}) {
    return (
        <div className="sidebarRow">
            {Icon && <Icon />}<h3>{name}</h3>
        </div>
    )
}

export default SidebarRow;
