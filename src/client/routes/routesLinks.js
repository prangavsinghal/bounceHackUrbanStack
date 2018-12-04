import React from "react";
import {
  Link
} from 'react-router-dom';
function RoutesLink(route){
  if (route.show){
  return (
      <slot><Link to={route.path}>{route.component.name} | </Link></slot>
    );
  }
  else{
    return null;
  }
  }

export default RoutesLink;