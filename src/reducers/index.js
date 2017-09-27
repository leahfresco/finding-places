import { combineReducers } from 'redux';
import PlacesReducer from './reducer_places';
import TermReducer from './reducer_term';

export default combineReducers({
  places: PlacesReducer,
  term: TermReducer
});
