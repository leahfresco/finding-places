import { FETCH_TERM } from '../actions/index'

export default function(state = '', action) {
  switch(action.type) {
  case FETCH_TERM:
    return action.term
  default:
    return state;
  }
}
