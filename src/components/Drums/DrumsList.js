import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteDrum } from '../../reducers/drums';
import S from '../styles/styles'


const DrumsList = (props) => {
  return (
    <S.Border>
    <ul>
     
       <S.Text>{props.drums.filter(drum => drum.drumSetID === props.id ).map(drum =>
       <li key={drum.id}>
      Drum Name:{drum.drumName} 
      <br />
      Drum Diameter: {drum.diameter}
      <br />
      Drum Wood Type: {drum.woodType}
      <br />
      Drum Coloer: {drum.color}
      <br />
      <S.Button drum={drum} onClick={() => props.deleteDrum(drum)}>Remove Drum</S.Button>
      
      </li>)}
      
    </S.Text>
    </ul>
    </S.Border>
  );
};

DrumsList.propTypes = {
  drums: PropTypes.arrayOf(PropTypes.object).isRequired
}


const mapStateToProps = (state) => ({ drums : state.drumsState.drums });
const mapDispatchToProps = (dispatch) => ({
  deleteDrum: drum => dispatch(deleteDrum(drum)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrumsList);
