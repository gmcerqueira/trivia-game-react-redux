import md5 from 'crypto-js/md5';
import he from 'he';

const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';
const CATEGORIES_URL = 'https://opentdb.com/api_category.php';
const GRAVATA_URL = 'https://www.gravatar.com/avatar/';
const QUESTIONS_URL = 'https://opentdb.com/api.php?amount=5';

export const requestCategories = () => fetch(CATEGORIES_URL)
  .then((res) => res.json())
  .then((res) => res.trivia_categories);

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

const decodeOptions = (options) => options.map((option) => he.decode(option));

// https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple
export const requestQuestions = (token, c, d, ty) => fetch(
  `${QUESTIONS_URL}&category=${c}&difficulty=${d}&type=${ty}&token=${token}`,
)
  .then((res) => res.json())
  .then((res) => {
    const { results } = res;
    results.forEach((result) => {
      result.question = he.decode(result.question);
      result.correct_answer = he.decode(result.correct_answer);
      result.incorrect_answers = decodeOptions(result.incorrect_answers);
    });

    localStorage.setItem('questions', JSON.stringify(results));
    return results;
  });

//
// ${hash-gerada}
