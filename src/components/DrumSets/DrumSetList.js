import React from 'react';
import PropTypes from 'prop-types';
import DrumsForm from '../Drums/DrumsForm';
import DrumSetList from '../DrumSets/DrumSetList';
import S from '../styles/styles'


import { connect } from 'react-redux';
import { addDrum } from '../../reducers/drums';

const DrumSetList = (props) => {
  return (
    <ul>
      <S.Text>{props.drumsets.map(drumset => <li key={drumset.id}>
      Drum Set Name:{drumset.name} <br />
      <br />
      
      <S.Button drumset={drumset} onClick={() => props.deleteDrumSet(drumset)} >Remove Drum Set</S.Button>
        <DrumsForm  buttonText="add a drum" onComplete={props.addDrum} drumID={drum.id}/> 
        <DrumsList drums={props.drums} id={drum.id} deleteDrum={props.deleteDrum} /></li>)}
        </S.Text>
      
    </ul>
  );
};

DrumSetList.propTypes = {
  drumsets: PropTypes.arrayOf(PropTypes.object).isRequired
}


const mapStateToProps = (state) => ({ drumsets : state.drumSetState.drumsets });
const mapDispatchToProps = { addDrum };
export default connect(mapStateToProps, mapDispatchToProps)(DrumSetList);