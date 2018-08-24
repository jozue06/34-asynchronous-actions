import defaultState from './defaultState';
import superagent from 'superagent';


// Action type
export const ADD = 'DrumSet/ADD';
export const DELETE = 'DrumSet/DELETE';

const ENV = {};

ENV.apiUrl = 'https://josh-lab14.herokuapp.com';

// Reducer
export default function reducer(state = defaultState, action) {

  
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return {
        ...state,
        drumsets: [...state.drumsets, payload]
      };
      case DELETE:
      return {
        ...state,
        drumsets: state.drumsets.filter(drumset => {
          return drumset._id !== payload._id})
      };

      case GET:
      return ({
        ...state,
       drumsets: action.payload
      });
      
      case UPDATE:
      return ({  
        ...state,
      drumsets: state.drumsets.map(drumset => drumset._id === payload._id ? payload : drumset)
      });
      
    default: return state;
  }
}

// Action Creators
export const addDrumSet = (drumset) => dispatch => {
  superagent.post(`${ENV.apiUrl}/api/drumset`, drumset)
  .then(res => 
    dispatch({
    type: ADD,
    payload: res.body
  })
)
}

export const deleteDrumSet = (drumset) => dispatch => {
  let id = drumset._id
  superagent.delete(`${ENV.apiUrl}/api/drumset/${id}`)
  .then(dispatch({
    type: DELETE,
    payload: drumset
  }));
 
}

export const getDrumSet = () => dispatch => {
  superagent
  .get(`${ENV.apiUrl}/api/drumset`)
  .then(res =>
  dispatch({
    type: GET,
    payload: res.body
  }))

}

export const updateDrumSet = (drumset) => dispatch => {
  superagent.put(`${ENV.apiUrl}/api/drumset`, drumset)
  .then(res => dispatch({
    type: UPDATE,
    payload: res.body
  }))
}
