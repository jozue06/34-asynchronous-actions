import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from '../styles/styles.js'

export default class DrumSetForm extends Component {

  state = {
    name:'',
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ name: ''});
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
    
  }

  render() {
    return (
      <S.Text>
      <form onSubmit={this.submitHandler}>
        <input name="name" value={this.state.name} onChange={this.changeHandler} type="text" placeholder="Drum Set Name"/>
        <br />
        <S.Button>{this.props.buttonText}</S.Button>
      </form>
      </S.Text>
    );
  }
}

DrumSetForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}