// Esse reducer será responsável por tratar as informações da pessoa usuária
import {
  REQUEST_QUESTIONS,
  REQUEST_QUESTIONS_SUCCESS,
  REQUEST_QUESTIONS_ERROR,
  SAVE_CURRENT_INDEX,
} from '../actions/index';

const initialState = {
  questions: [],
  isFetching: false,
};

function game(state = initialState, action) {
  switch (action.type) {
  case REQUEST_QUESTIONS:
  case REQUEST_QUESTIONS_SUCCESS:
  case REQUEST_QUESTIONS_ERROR:
  case SAVE_CURRENT_INDEX:
    return {
      ...state,
      ...action.payload,
    };

  default:
    return state;
  }
}

export default game;
