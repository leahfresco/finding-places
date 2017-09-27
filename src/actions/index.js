export const FETCH_PLACES = 'FETCH_PLACES';
export const FETCH_TERM = 'FETCH_TERM';

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
