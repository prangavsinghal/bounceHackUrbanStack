import React from "react";
import {
    Route
} from 'react-router-dom';
function RoutesRender(route){
    return (
      <Route
        path={route.path}
        component={route.component}
      />
    );
  }

  export default RoutesRender;