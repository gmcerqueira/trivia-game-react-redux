// Esse reducer será responsável por tratar as informações da pessoa usuária
import { REQUEST_QUESTIONS_SUCCESS } from '../actions/index';

const initialState = {
 questions:[],
};

function gameReducer (state = initialState, action) {
  switch (action.type) {

  case REQUEST_QUESTIONS_SUCCESS:
    return {
      ...state,
      ...action.payload,
    };

  default:
    return state;
  }
}

export default gameReducer ;
