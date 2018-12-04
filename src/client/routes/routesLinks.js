import React from "react";
import {
  Link
} from 'react-router-dom';
function RoutesLink(route){
  return (
      <slot><Link to={route.path}>{route.component.name} | </Link></slot>
    );
  }

export default RoutesLink;