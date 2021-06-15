import { requestQuestions } from '../services/triviaApi';


export const requestQuestionsAPI = () => ({
    type: 'REQUEST_QUESTIONS',
    payload: {
      isFetching: true,
    },
  });
  
  export const requestQuestionsAPISuccess = (questions) => ({
    type: 'REQUEST_QUESTIONS_SUCCESS',
    payload: {
        questions,
      isFetching: false,
    },
  });
  
  export const requestQuestionsAPIError = (error) => ({
    type: 'REQUEST_QUESTIONS',
    payload: {
      error,
      isFetching: false,
    },
  });
  

export const fetchQuestions = (token) => (dispatch) => {
    dispatch(requestQuestionsAPI());
    requestQuestions(token)
      .then((questions) => dispatch(requestQuestionsAPISuccess(questions)))
      .catch(() => dispatch(requestQuestionsAPIError('Não foi possível recuperar')));
  };