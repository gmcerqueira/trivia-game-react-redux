import { combineReducers } from 'redux';
import player from './player';
import game from './game';
import config from './config';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers({
  player,
  game,
  config,
});

export default rootReducer;
