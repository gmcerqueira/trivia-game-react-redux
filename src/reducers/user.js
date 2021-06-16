// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_EMAIL, SAVE_NAME, SAVE_IMG, REQUEST_TOKEN_SUCCESS } from '../actions/index';

const initialState = {
  email: 'gustavomc_53@hotmail.com',
  playerName: 'Gustavo ',
  playerImg: 'https://www.gravatar.com/avatar/def584e93ab1b50012af443500b16fca',
  token: '0d9ab73eefc805b6c58570b2017c9500ce3319febb26c751e6dd6e47063e8b66',
  isFetching: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      ...state,
      email: action.payload,
    };

  case SAVE_NAME:
    return {
      ...state,
      playerName: action.payload,
    };

  case SAVE_IMG:
    return {
      ...state,
      playerImg: action.payload,
    };

  case REQUEST_TOKEN_SUCCESS:
    return {
      ...state,
      ...action.payload,
    };

  default:
    return state;
  }
}

export default userReducer;
