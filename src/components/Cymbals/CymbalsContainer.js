import React from 'react';
import { connect } from 'react-redux';
import { addCymbal } from '../../reducers/cymbals';
import CymbalsForm from './CymbalsForm';


const CymbalsContainer = (props) => {
  return (
    <section>
      <h2>Cymbals</h2>
    <CymbalsForm buttonText="Add Cymbal" onComplete={props.addCymbal} />
    </section>
  );
};

const mapStateToProps = (state) => ({ cymbals : state.cymbalsState.cymbals });
const mapDispatchToProps = { addCymbal };
export default connect(mapStateToProps, mapDispatchToProps)(CymbalsContainer);