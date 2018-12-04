import React from "react";
import {
    Route
} from 'react-router-dom';
function RoutesRender(route){
    return (
      <Route
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    );
  }

  export default RoutesRender;