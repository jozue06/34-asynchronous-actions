import React from 'react';
import { connect } from 'react-redux';
import { addDrumSet, deleteDrumSet } from '../../reducers/drumSet';

import DrumSetForm from './DrumSetForm';
import DrumSetList from './DrumSetList';

const DrumSetContainer = (props) => {
  return (
    <section>
      <h2>Drum Sets:</h2>
      <DrumSetForm buttonText="Add Drum Set" onComplete={props.addDrumSet}  />
      <DrumSetList drumsets={props.drumsets} deleteDrumSet={props.deleteDrumSet} />
    </section>
  );
};

const mapStateToProps = (state) => ({ drumsets : state.drumSetState.drumsets });
const mapDispatchToProps = (dispatch) => ({
  addDrumSet: drumset => dispatch(addDrumSet(drumset)),
  updateDrumSet: drumset => dispatch(updateDrumSet(drumset)),
  deleteDrumSet: drumset => dispatch(deleteDrumSet(drumset)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrumSetContainer);