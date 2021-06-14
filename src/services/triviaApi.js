import md5 from 'crypto-js/md5';

const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';
const GRAVATA_URL = 'https://www.gravatar.com/avatar/';

export const requestToken = () => fetch(TOKEN_URL)
  .then((res) => res.json())
  .then((res) => {
    const { token } = res;
    localStorage.setItem('token', token);
    return token;
  });

export const requestGravatarImage = (email) => {
  const crypto = md5(email).toString();
  return fetch(`${GRAVATA_URL}${crypto}`);
};

export const requestQuestions = () => {};
//
// ${hash-gerada}
