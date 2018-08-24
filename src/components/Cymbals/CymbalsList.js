import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCymbal } from '../../reducers/cymbals';
import S from '../styles/styles'


const CymbalsList = (props) => {
  return (
    <S.Border>
    <ul>
     
       <S.Text>{props.cymbals.filter(cymbal => cymbal.drumSetID === props.id ).map(cymbal =><li key={cymbal.id}>Cymbal:{cymbal.cymbalType} 
      <br />
      Cymbal Diameter: {cymbal.diameter}
      <br />
      Cymbal Finish: {cymbal.finish}
      <br />
      <S.Button cymbal={cymbal} onClick={() => props.deleteCymbal(cymbal)}>Remove Cymbal</S.Button>
      
      </li>)}
      
    </S.Text>
    </ul>
    </S.Border>
  );
};

CymbalsList.propTypes = {
  cymbals: PropTypes.arrayOf(PropTypes.object).isRequired
}


const mapStateToProps = (state) => ({ cymbals : state.cymbalsState.cymbals });
const mapDispatchToProps = (dispatch) => ({
  deleteCymbal: cymbal => dispatch(deleteCymbal(cymbal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CymbalsList);
