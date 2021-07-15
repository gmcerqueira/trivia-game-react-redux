/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
// Esse reducer será responsável por tratar as informações da pessoa usuária
import {
  SAVE_EMAIL,
  SAVE_NAME,
  SAVE_IMG,
  REQUEST_TOKEN,
  REQUEST_TOKEN_SUCCESS,
  REQUEST_TOKEN_ERROR,
  SAVE_SCORE,
  SAVE_ASSERTIONS,
} from '../actions/index';

const initialState = {
  email: '',
  name: '',
  gravatarEmail: '',
  score: 0,
  assertions: 0,
  token: '',
  isFetching: false,
};

function player(state = initialState, action) {
  switch (action.type) {
  case SAVE_EMAIL:
  case SAVE_NAME:
  case SAVE_IMG:
  case SAVE_SCORE:
  case SAVE_ASSERTIONS:
  case REQUEST_TOKEN:
  case REQUEST_TOKEN_SUCCESS:
  case REQUEST_TOKEN_ERROR:
    return {
      ...state,
      ...action.payload,

    };

  default:
    return state;
  }
}

export default player;
