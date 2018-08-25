import React from 'react';
import PropTypes from 'prop-types';
import DrumsForm from '../Drums/DrumsForm';
import DrumsList from '../Drums/DrumsList';
import CymbalsForm from '../Cymbals/CymbalsForm';
import CymbalsList from '../Cymbals/CymbalsList';
import S from '../styles/styles'

import { connect } from 'react-redux';
import { addDrum } from '../../reducers/drums';
import { addCymbal } from '../../reducers/cymbals';


const DrumSetList = (props) => {
  return (
    <ul>
      <S.Text>{props.drumsets.map(drumset => <li key={drumset.id}>
      Drum Set Name:{drumset.name} <br />
      <br />
      
      <S.Button drumset={drumset} onClick={() => props.deleteDrumSet(drumset)} >Remove Drum Set</S.Button>
      <br />
        <DrumsForm key={drumset._id} buttonText="add a drum" onComplete={props.addDrum} drumID={drumset._id}/> 
        <DrumsList drums={props.drums} id={drumset.id} deleteDrum={props.deleteDrum} > List of drums </DrumsList>
        <br />
        <CymbalsForm  buttonText="add a cymbal" onComplete={props.addCymbal} cymbalID={drumset.id}/> 
        <CymbalsList cymbals={props.cymbals} id={drumset.id} deleteCymbal={props.deleteCymbal} />
        
        </li>)}

        </S.Text>
      
    </ul>
  );
};

DrumSetList.propTypes = {
  drumsets: PropTypes.arrayOf(PropTypes.object).isRequired
}


const mapStateToProps = (state) => ({ drumsets : state.drumSetState.drumsets });
const mapDispatchToProps = { addDrum, addCymbal};
export default connect(mapStateToProps, mapDispatchToProps)(DrumSetList);