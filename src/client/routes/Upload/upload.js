import React, { Component } from 'react';
import './upload.css';

import Dropdown from '../../components/dropdown/Dropdown'

import StartRoutes from '../StartLocations';
import EndRoutes from '../EndLocations';
import SimpleCard from '../../components/Cards/cards';
import routes from '../routes';
  
export default class Upload extends Component {
  state = { 
    startLoc: null,
    endLoc: null,
    displayCards: false,
    displayTicket1: false,
    displayTicket2: false,
    displayTicket3: false,
    };

    constructor(props){
      super(props);
      this.startLocElement = React.createRef();
      this.endLocElement = React.createRef();
    }
    handleCardClick1 = () => {
      this.setState({displayTicket1 : !this.state.displayTicket1})
    }

    handleCardClick2 = () => {
      this.setState({displayTicket2 : !this.state.displayTicket2})
    }

    handleCardClick3 = () => {
      this.setState({displayTicket3 : !this.state.displayTicket3})
    }

    setStartLoc = (loc) => {
      this.setState({startLoc: loc})
      this.handleSelect()
    }
    setEndLoc = (loc) => {
      this.setState({endLoc: loc})
      this.handleSelect()
    }

    handleSelect = () => {
      if(this.state.displayCards){
      this.setState({displayCards : !this.state.displayCards});
      }
    }
  handleRoute = () => {
    if(this.startLocElement.current.state.selectedOption!=null && this.endLocElement.current.state.selectedOption!=null ){
    this.setState({
      displayCards: !this.state.displayCards
  });
}
else{
  alert("Please input locations!");
}
  }
  

  render() {
    return (
    <div>  { this.state.displayTicket1 || this.state.displayTicket2 || this.state.displayTicket3 ?  null :
    <div>
          <Dropdown ref = {this.startLocElement}  placeholder = {this.state.startLoc} onSelect = {this.setStartLoc} options = { StartRoutes }/>
          <Dropdown ref = {this.endLocElement}  placeholder = {this.state.endLoc} onSelect = {this.setEndLoc} options = { EndRoutes }/>
          {this.state.displayCards ? null :
          <button id = "routeButton" onClick = {this.handleRoute}>GET ROUTES</button>
          }
          {
        this.state.displayCards ?  <div>
        <SimpleCard cardClickEvent = {this.handleCardClick1} routesConfig = {routes[0]}/> 
        <SimpleCard cardClickEvent = {this.handleCardClick2} routesConfig = {routes[1]}/> 
        <SimpleCard cardClickEvent = {this.handleCardClick3} routesConfig = {routes[2]}/> 
        </div> : null
      }
    </div> }
    {this.state.displayTicket1? <button onClick = {this.handleCardClick1} className="ticket"><img src={require('../../assets/pass1.png')}></img></button>:null}
    {this.state.displayTicket2? <button onClick = {this.handleCardClick2} className="ticket"><img src={require('../../assets/pass2.png')}></img></button>:null}
    {this.state.displayTicket3? <button onClick = {this.handleCardClick3} className="ticket"><img src={require('../../assets/pass3.png')}></img></button>:null}
    </div>    );
  }
}
