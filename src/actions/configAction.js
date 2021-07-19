import { requestCategories } from '../services/triviaApi';

import {
  REQUEST_CATEGORIES,
  REQUEST_CATEGORIES_SUCCESS,
  REQUEST_CATEGORIES_ERROR,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
} from './index';

export const requestCategoriesAPI = () => ({
  type: REQUEST_CATEGORIES,
  payload: {
    isFetching: true,
  },
});

export const requestCategoriesAPISuccess = (categories) => ({
  type: REQUEST_CATEGORIES_SUCCESS,
  payload: {
    categories,
    isFetching: false,
  },
});

export const requestCategoriesAPIError = (error) => ({
  type: REQUEST_CATEGORIES_ERROR,
  payload: {
    error,
    isFetching: false,
  },
});

export const changeCategory = (category) => ({
  type: CHANGE_CATEGORY,
  payload: {
    category,
  },
});

export const changeDifficulty = (difficulty) => ({
  type: CHANGE_DIFFICULTY,
  payload: {
    difficulty,
  },
});

export const changeType = (type) => ({
  type: CHANGE_TYPE,
  payload: {
    type,
  },
});

export const fetchCategories = () => (dispatch) => {
  dispatch(requestCategoriesAPI());
  requestCategories()
    .then((categories) => dispatch(requestCategoriesAPISuccess(categories)))
    .catch(() => dispatch(requestCategoriesAPIError('Não foi possível recuperar')));
};
