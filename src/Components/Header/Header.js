import React, {useState} from 'react'
import './Header.css'


// Material UI Imports //
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'


function Header ({handleClick, handleChange}){
    
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img 
                    className = "header__logo"
                    src= 'https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg'
                    alt = "Youtube Logo"
                />
            </div>

            <div className="header__input">
                <input onChange={handleChange} value={search} text="text" placeholder="Search" />
            
                <SearchIcon className = "header__inputButton" onClick={handleClick} />
            </div>

            <div className="header__icons">
                <VideoCallIcon className= "header__icon" />
                <AppsIcon className ="header__icon" />
                <NotificationsIcon className = "header__icon" />
                <Avatar alt='G' />
            </div>
        </div>
    )
}

export default Header