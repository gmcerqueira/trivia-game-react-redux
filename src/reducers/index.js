import { combineReducers } from 'redux';
import userReducer from './user';
import gameReducer from './game'

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers({ 
    userReducer,
    gameReducer,
});

export default rootReducer;
