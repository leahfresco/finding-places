export const FETCH_PLACES = 'FETCH_PLACES';
export const FETCH_TERM = 'FETCH_TERM';
export const TOGGLE_PLACE = 'TOGGLE_PLACE';

export const fetchTerm = term => {
  return {
    type: FETCH_TERM,
    term
  }
}

export const fetchPlaces = places => {
  return {
    type: FETCH_PLACES,
    places
  }
}

export const toggleActivePlace = id => {
  return {
    type: TOGGLE_PLACE,
    id
  }
}
