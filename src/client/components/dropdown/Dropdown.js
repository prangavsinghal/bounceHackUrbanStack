import React,{ Component } from 'react';
import './dropdown.css'
import Select from 'react-select';
export default class Dropdown extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.onSelect(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  setPlaceHolder = () =>{
    this.setState({selectedOption : this.props.placeholder})
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select className ={ "select " + ( this.props.styleName ? this.props.styleName : "") }
        value={selectedOption}
        onChange={this.handleChange}
        options={this.props.options}
        placeholder = {this.props.placeholder?this.props.placeholder.label:"Select"}
        />
    );
  }
}