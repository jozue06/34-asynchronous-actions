import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from '../styles/styles.js'


export default class DrumsForm extends Component {

  state = {
    woodType:'',
    drumName:'',
    diameter:'',
    color:'',
    drumSetID: this.props.drumSetID,
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({   
      woodType:'',
      drumName:'',
      diameter:'',
      color:'',
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
        <input name="woodType" value={this.state.woodType} onChange={this.changeHandler} type="text" placeholder="Wood Type"/>
        <br />
        <input name="drumName" value={this.state.drumName} onChange={this.changeHandler} type="text" placeholder="Drum Name"/>
        <br />
        <input name="diameter" value={this.state.diameter} onChange={this.changeHandler} type="number" placeholder="Drum Diameter"/>
        <br />
        <input name="coloer" value={this.state.color} onChange={this.changeHandler} type="text" placeholder="Drum Color"/>

        <br />
        <S.Button>{this.props.buttonText}</S.Button>
      </form>
   
    );
  }
}

DrumsForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}