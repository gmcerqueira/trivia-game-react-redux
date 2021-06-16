// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_EMAIL, SAVE_NAME, SAVE_IMG, REQUEST_TOKEN_SUCCESS, SAVE_SCORE } from '../actions/index';

const initialState = {
  email: 'gustavomc_53@hotmail.com',
  name: 'Gustavo ',
  gravatarEmail: 'def584e93ab1b50012af443500b16fca',
  token: '0d9ab73eefc805b6c58570b2017c9500ce3319febb26c751e6dd6e47063e8b66',
  isFetching: false,
};

function player(state = initialState, action) {
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      ...state,
      email: action.payload,
    };

  case SAVE_NAME:
    return {
      ...state,
      name: action.payload,
    };

  case SAVE_IMG:
    return {
      ...state,
      gravatarEmail: action.payload,
    };

  case REQUEST_TOKEN_SUCCESS:
    return {
      ...state,
      ...action.payload,
    };

  case SAVE_SCORE:
    return {
      ...state,
      ...action.payload,
    };

  default:
    return state;
  }
}

export default player;
