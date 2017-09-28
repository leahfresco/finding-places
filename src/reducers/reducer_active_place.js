import { TOGGLE_PLACE } from '../actions/index'

export default function(state = -1, action) {
  switch(action.type) {
  case TOGGLE_PLACE:
    return action.id
  default:
    return state;
  }
}
