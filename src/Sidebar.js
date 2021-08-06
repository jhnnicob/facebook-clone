import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import SettingsBackupRestoreOutlinedIcon from '@material-ui/icons/SettingsBackupRestoreOutlined';
import StoreIcon from '@material-ui/icons/Store';
import EventIcon from '@material-ui/icons/Event';
import StarIcon from '@material-ui/icons/Star';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core';
import UserInfo from './components/Avatar';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__head"><UserInfo /></div>
            <SidebarRow Icon={PeopleAltOutlinedIcon} name="Friends" />
            <SidebarRow Icon={SettingsBackupRestoreOutlinedIcon} name="Memories" />
            <SidebarRow Icon={StoreIcon} name="Marketplace" />
            <SidebarRow Icon={EventIcon} name="Events" />
            <SidebarRow Icon={StarIcon} name="Favorite" />
            <SidebarRow Icon={SupervisedUserCircleIcon} name="Groups" />
            <SidebarRow Icon={ArrowDropDownIcon} name="See More" />
        </div>
    )
}

export default Sidebar;
