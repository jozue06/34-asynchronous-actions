import React from 'react';
import { connect } from 'react-redux';
import { addDrum } from '../../reducers/drums';
import DrumsForm from './DrumsForm';


const DrumsContainer = (props) => {
  return (
    <section>
      <h2>Drums</h2>
    <DrumsForm buttonText="Add Drum" onComplete={props.addDrum} />
    </section>
  );
};

const mapStateToProps = (state) => ({ drums : state.drumState.drums });
const mapDispatchToProps = { addDrum };
export default connect(mapStateToProps, mapDispatchToProps)(DrumsContainer);