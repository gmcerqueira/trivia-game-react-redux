import md5 from 'crypto-js/md5';
import { requestToken } from '../services/triviaApi';

export const saveEmail = (email) => ({
  type: 'SAVE_EMAIL',
  payload: email,
});

export const saveName = (name) => ({
  type: 'SAVE_NAME',
  payload: name,
});

export const saveImg = (email) => ({
  type: 'SAVE_IMG',
  payload: md5(email).toString(),
});

export const requestTokenAPI = () => ({
  type: 'REQUEST_TOKEN',
  payload: {
    isFetching: true,
  },
});

export const requestTokenAPISuccess = (token) => ({
  type: 'REQUEST_TOKEN_SUCCESS',
  payload: {
    token,
    isFetching: false,
  },
});

export const requestTokenAPIError = (error) => ({
  type: 'REQUEST_TOKEN',
  payload: {
    error,
    isFetching: false,
  },
});

export const fetchToken = () => (dispatch) => {
  dispatch(requestTokenAPI());
  requestToken()
    .then((token) => dispatch(requestTokenAPISuccess(token)))
    .catch(() => dispatch(requestTokenAPIError('Não foi possível recuperar')));
};
