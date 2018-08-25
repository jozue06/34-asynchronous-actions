import React from 'react';
import { connect } from 'react-redux';
import { addDrumSet, deleteDrumSet, updateDrumSet, getDrumSet } from '../../reducers/drumSet';

import DrumSetForm from './DrumSetForm';
import DrumSetList from './DrumSetList';



class DrumSetContainer extends React.Component{

  componentDidMount(){
    this.props.getDrumSet();
     }

     render(){
  return (
    <section>
      <h2>Drum Sets:</h2>
      <DrumSetForm buttonText="Add Drum Set" onComplete={this.props.addDrumSet}  />
      <DrumSetList drumsets={this.props.drumsets} deleteDrumSet={this.props.deleteDrumSet} />
    </section>
  );
};
}
const mapStateToProps = (state) => ({ drumsets : state.drumSetState.drumsets });
const mapDispatchToProps = (dispatch) => ({
  addDrumSet: drumset => dispatch(addDrumSet(drumset)),
  updateDrumSet: drumset => dispatch(updateDrumSet(drumset)),
  deleteDrumSet: drumset => dispatch(deleteDrumSet(drumset)),
  getDrumSet: drumset => dispatch(getDrumSet(drumset)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrumSetContainer);