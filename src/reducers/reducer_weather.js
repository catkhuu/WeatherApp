import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('Action received', action);
  // setup switch statement to only handle FETCH_WEATHER type

  switch(action.type) {
  case FETCH_WEATHER:
      // accumulate past weather search for user and new weather data
      // push will mutate state in reducer
      // concat will not mutate state, instead
      // it will return a new array with the previous and new weather data
      // *** return state.concat([action.payload.data]);
      // same result as above but more concise
      // create array that contains action.payload.data
      // three dots precede state, so it must be an array
      // add existing entries from state array
      // into the array containing action.payload.data
      return [ action.payload.data, ...state ];
  }
  return state;
}
