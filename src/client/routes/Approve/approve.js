import React, { Component } from 'react';
import './approve.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Approve extends Component {
  render() {
  
    return (
      <Link to="/" className="ticket"><img src={require('../../assets/recharge.png')}></img></Link>
    );
  }
}
