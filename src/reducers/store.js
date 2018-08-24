import { createStore, combineReducers,  applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import drumsState from './drums';
import cymbalsState from './cymbals';
import drumSetState from './drumSet';

// import reporter from './reporter'
// import catValidator from './catValidator'
// import expValidator from './expValidator'

const rootReducer = combineReducers({
  drumSetState,
  cymbalsState,
  drumsState,
});

export default createStore(rootReducer, applyMiddleware(thunk));

//, catValidator, expValidator