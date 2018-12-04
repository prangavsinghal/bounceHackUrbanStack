import React from 'react';
import './header.css';
import routesConfig from '../../routes/RoutesConfig'
import RoutesLink from '../../routes/routesLinks'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const render = ()=>{

return(
<div className="app-header" >
    <slot id="header">
        <div className="icon"></div>
        <div className="title">Swift Scheme Management System</div>
    </slot>
    <div id="links">
        {routesConfig.map((route, i) => (
        <RoutesLink key={i} {...route} />
        ))}
    </div>
</div>
);
};

export default render;