import React from 'react';
import './header.css';
import Dropdown from '../dropdown/Dropdown';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const render = ()=>{

return(
<div className="app-header" >
    <slot id="header">
        <img id = "menuIcon" src={require('../../assets/menu.svg')}/>
        <Link to="/Approve"><img id = "logoIcon" src={require('../../assets/app_logo.svg')}/></Link>
        <img id = "notificationIcon" src={require('../../assets/notifications.svg')}/>
    </slot>
</div>
);
};

export default render;