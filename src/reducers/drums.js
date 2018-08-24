import defaultState from './defaultState';
import superagent from 'superagent';

// Action type
export const ADD = 'Drum/ADD';
export const DELETE = 'Drum/DELETE';

const ENV = {};

ENV.apiUrl = 'https://josh-lab14.herokuapp.com';

// Reducer
export default function reducer(state = defaultState, action) {

  
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return {
        ...state,
        drums: [...state.drums, payload]
      };
      case DELETE:
      return {
        ...state,
        drums: state.drums.filter(drum => {
          return drum._id !== payload._id})
      };

      case GET:
      return ({
        ...state,
       drums: action.payload
      });
      
      case UPDATE:
      return ({  
        ...state,
      drums: state.drums.map(drum => drum._id === payload._id ? payload : drum)
      });
      
    default: return state;
  }
}

// Action Creators
export const addDrum = (drum) => dispatch => {
  superagent.post(`${ENV.apiUrl}/api/v1/drums`, drum)
  .then(res => 
    dispatch({
    type: ADD,
    payload: res.body
  })
)
}

export const deleteDrum = (drum) => dispatch => {
  let id = drum._id
  superagent.delete(`${ENV.apiUrl}/api/v1/drums/${id}`)
  .then(dispatch({
    type: DELETE,
    payload: drumset
  }));
 
}

export const getDrum = () => dispatch => {
  superagent
  .get(`${ENV.apiUrl}/api/v1/drums`)
  .then(res =>
  dispatch({
    type: GET,
    payload: res.body
  }))

}

export const updateDrum = (drum) => dispatch => {
  superagent.put(`${ENV.apiUrl}/api/v1/drums`, drum)
  .then(res => dispatch({
    type: UPDATE,
    payload: res.body
  }))
}
