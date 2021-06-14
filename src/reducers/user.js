// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_CHANGE, PLAYER_CHANGE } from '../actions/index';

const initialState = {
  email: '',
  playerName:'',
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
  default:
    return state;
  }
}

export default userReducer;