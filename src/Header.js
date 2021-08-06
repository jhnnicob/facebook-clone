import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import { Avatar, Icon } from '@material-ui/core';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import UserInfo from './components/Avatar';
import {useStateValue} from './StateProvider';

function Header() {
   
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/800px-Facebook_f_Logo_%28with_gradient%29.svg.png" 
                    alt="logo"/>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon />
                </div>
                <div className="header__option">
                    <OndemandVideoOutlinedIcon />
                </div>
                <div className="header__option">
                    <StorefrontIcon />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleOutlinedIcon />
                </div>
                <div className="header__option">
                    <DashboardOutlinedIcon/>
                </div>
            </div>
            <div className="header__right">
                <UserInfo user={user}/>
                <IconButton>
                    <AppsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <ChatBubbleIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
