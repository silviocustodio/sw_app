import { FETCH_SWAPI } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_SWAPI:
            return [ action.payload, ...state ];
    }
    return state;
}
