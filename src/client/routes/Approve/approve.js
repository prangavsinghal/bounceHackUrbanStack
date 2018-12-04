import React, { Component } from 'react';
import './approve.css';

// import ApproveTemplate from './approve.jsx';
export default class Approve extends Component {

  state = { 
    answer: null,
    image: null,
    error: null
  };
  componentDidMount() {
      fetch('/api/yesNoWtf')
      .then(res => res.json())
      .then(response => this.setState({ answer: response.answer, image: response.image }))
      .catch(error => this.setState({error}));
    }

  render() {
  
    return (
      <div className="jumbotron">
        <h1 className="display-3">Approve</h1>
      </div>
    );
  }
}
