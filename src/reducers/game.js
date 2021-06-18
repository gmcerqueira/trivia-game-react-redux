// Esse reducer será responsável por tratar as informações da pessoa usuária
import { REQUEST_QUESTIONS_SUCCESS, SAVE_CURRENT_INDEX } from '../actions/index';

const initialState = {
  questions: [],
};

function gameReducer(state = initialState, action) {
  switch (action.type) {
  case REQUEST_QUESTIONS_SUCCESS:
  case SAVE_CURRENT_INDEX:
    return {
      ...state,
      ...action.payload,
    };

  default:
    return state;
  }
}

export default gameReducer;
