import { requestToken } from '../services/triviaApi';

export const emailOnChange = (email) => ({
  type: 'EMAIL_CHANGE',
  payload: email,
});

export const playerName = (player) => ({
  type: 'PLAYER_CHANGE',
  payload: player,
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
