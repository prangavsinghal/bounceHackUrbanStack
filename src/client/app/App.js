import React, { Component } from 'react';
import '../styles/App.css';
import routesConfig from '../routes/RoutesConfig';
import RoutesRender from '../routes/routesRender';
import Header from '../components/header/Header';


// import route Components here
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id = "googlemaps"/>
          <Header/>
          <div className="container mainContainer">
            <Switch>
              {routesConfig.map((route, i) => (<RoutesRender key={i} {...route} />))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
