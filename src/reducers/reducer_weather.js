import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
	// must return a new state
	// Not add or remove thing from old state
	// !!! NOT MUNIPULATE OLD STATE ONLY CREATE A BRAND NEW STATE
	switch(action.type) {
		case FETCH_WEATHER:
			//return state.concat([action.payload.data]);
			return [ action.payload.data, ...state ];
	}
 
	return state;
}