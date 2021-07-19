// Esse reducer será responsável por tratar as informações da pessoa usuária
import {
  REQUEST_CATEGORIES,
  REQUEST_CATEGORIES_SUCCESS,
  REQUEST_CATEGORIES_ERROR,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
} from '../actions/index';

const initialState = {
  categories: [],
  difficulty: '',
  category: '',
  type: '',
  isFetching: false,

};

function config(state = initialState, { type, payload }) {
  switch (type) {
  case REQUEST_CATEGORIES:
  case REQUEST_CATEGORIES_SUCCESS:
  case REQUEST_CATEGORIES_ERROR:
  case CHANGE_CATEGORY:
  case CHANGE_DIFFICULTY:
  case CHANGE_TYPE:
    return {
      ...state,
      ...payload,
    };

  default:
    return state;
  }
}

export default config;
