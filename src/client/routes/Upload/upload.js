import React, { Component } from 'react';
import './upload.css';

import UploadTemplate from './upload.jsx';
export default class Upload extends Component {
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
      <UploadTemplate answer={this.state.answer} image={this.state.image}/>
    );
  }
}
