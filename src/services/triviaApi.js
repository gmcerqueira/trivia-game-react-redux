const API_URL = 'https://opentdb.com/api_token.php?command=request';

export const requestToken = () => fetch(API_URL)
  .then((res) => res.json())
  .then((res) => {
    const { token } = res;
    localStorage.setItem('token', token);
    return token;
  });

export const requestQuestions = () => {};
