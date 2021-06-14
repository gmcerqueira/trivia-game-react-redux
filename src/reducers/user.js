// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_CHANGE, PLAYER_CHANGE, REQUEST_TOKEN_SUCCESS } from '../actions/index';

const initialState = {
  email: '',
  playerName: '',
  token: '',
  isFetching: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case EMAIL_CHANGE:
    return {
      ...state,
      email: action.payload,
    };
  case PLAYER_CHANGE:
    return {
      ...state,
      playerName: action.payload,
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
