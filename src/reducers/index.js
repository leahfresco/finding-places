import { combineReducers } from 'redux';
import PlacesReducer from './reducer_places';
import TermReducer from './reducer_term';
import ActivePlaceReducer from './reducer_active_place';

export default combineReducers({
  places: PlacesReducer,
  term: TermReducer,
  id: ActivePlaceReducer
});
