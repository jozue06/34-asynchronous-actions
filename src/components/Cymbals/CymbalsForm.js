import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from '../styles/styles.js'


export default class CymbalsForm extends Component {

  // !!!!! CHECK MONGO SCHEMA FOR STATE ITEMS!
  state = {
    cymbalType:'',
    diameter:'',
    finish:'',
    drumSetID: this.props.drumSetID,
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ 
      cymbalType:'',
      diameter:'',
      finish:'',
    });
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  render() {
    return (
 
      <form onSubmit={this.submitHandler}>
        <input name="cymbalType" value={this.state.cymbalType} onChange={this.changeHandler} type="text" placeholder="Cymbal Type"/>
        <input name="finish" value={this.state.finish} onChange={this.changeHandler} type="text" placeholder="Finish Type"/>
        <input name="diameter" value={this.state.diameter} onChange={this.changeHandler} type="number" placeholder="Diameter"/>
        <br />
        <S.Button>{this.props.buttonText}</S.Button>
      </form>
   
    );
  }
}

CymbalsForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}