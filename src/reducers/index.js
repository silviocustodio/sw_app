import { combineReducers } from 'redux';
import SwapiReducer from './reducer_swapi';

const rootReducer = combineReducers({
    swapi: SwapiReducer
});

export default rootReducer;
