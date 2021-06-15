// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_EMAIL, SAVE_NAME, SAVE_IMG, REQUEST_TOKEN_SUCCESS } from '../actions/index';

const initialState = {
  email: '',
  playerName: 'teste',
  playerImg: '',
  token: '',
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