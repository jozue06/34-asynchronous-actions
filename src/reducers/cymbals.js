import defaultState from './defaultState';
import superagent from 'superagent';


// Action type
export const ADD = 'Cymbals/ADD';
export const DELETE = 'Cymbals/DELETE';

const ENV = {};

ENV.apiUrl = 'https://josh-lab14.herokuapp.com';

// Reducer
export default function reducer(state = defaultState, action) {

  
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return {
        ...state,
        cymbals: [...state.cymbals, payload]
      };
      case DELETE:
      return {
        ...state,
        cymbals: state.cymbals.filter(cymbal => {
          return cymbal._id !== payload._id})
      };

      case GET:
      return ({
        ...state,
        cymbals: action.payload
      });
      
      case UPDATE:
      return ({  
        ...state,
        cymbals: state.cymbals.map(cymbal => cymbal._id === payload._id ? payload : cymbal)
      });
      
    default: return state;
  }
}

// Action Creators
export const addCymbal = (cymbal) => dispatch => {
  superagent.post(`${ENV.apiUrl}/api/v1/cymbals`, cymbal)
  .then(res => 
    dispatch({
    type: ADD,
    payload: res.body
  })
)
}

export const deleteCymbal = (cymbal) => dispatch => {
  let id = cymbal._id
  superagent.delete(`${ENV.apiUrl}/api/v1/cymbals/${id}`)
  .then(dispatch({
    type: DELETE,
    payload: cymbal
  }));
 
}

export const getCymbal = () => dispatch => {
  superagent
  .get(`${ENV.apiUrl}/api/v1/cymbals`)
  .then(res =>
  dispatch({
    type: GET,
    payload: res.body
  }))

}

export const updateCymbal = (cymbal) => dispatch => {
  superagent.put(`${ENV.apiUrl}/api/v1/cymbals`, cymbal)
  .then(res => dispatch({
    type: UPDATE,
    payload: res.body
  }))
}
