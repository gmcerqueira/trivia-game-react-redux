// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_EMAIL, SAVE_NAME, SAVE_IMG, REQUEST_TOKEN_SUCCESS } from '../actions/index';

const initialState = {
  email: 'gustavomc_53@hotmail.com',
  playerName: 'Gustavo ',
  playerImg: 'https://www.gravatar.com/avatar/def584e93ab1b50012af443500b16fca',
  token: 'bcb29a653c089dd183b4f31a46594519769097d02839bce7c00355364e4f8fe1',
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
