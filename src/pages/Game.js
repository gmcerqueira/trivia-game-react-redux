import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { fetchQuestions } from '../actions/gameAction';
import { saveScore, saveAssertions } from '../actions/userAction';
import '../App.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assertions: 0,
      currentQuestion: 0,
      options: [],
      timer: 30,
      points: 0,
      stopTimer: false,
    };
    this.joinAnswers = this.joinAnswers.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.chosenAnswer = this.chosenAnswer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.correctAnswerSumPoints = this.correctAnswerSumPoints.bind(this);
  }

  componentDidMount() {
    const { requestQuestions, token, name } = this.props;
    localStorage.setItem('state', JSON.stringify({
      player: {
        name,
        assertions: 0,
        score: 0,
        gravatarEmail: 'gravatarEmail',
      } }));
    requestQuestions(token);
  }

  componentDidUpdate(prevProps) {
    const { questions } = this.props;
    if (questions !== prevProps.questions) this.joinAnswers();
  }

  joinAnswers() {
    const { questions } = this.props;
    const { currentQuestion } = this.state;
    const roundingNumber = 0.5;
    this.setState({
      options: [
        questions[currentQuestion].correct_answer,
        ...questions[currentQuestion].incorrect_answers,
      ].sort(() => Math.random() - roundingNumber),
    });
  }

  nextQuestion() {
    const { currentQuestion, points, assertions } = this.state;
    const { questions, savePlayerScore, savePlayerAssertions } = this.props;
    if (currentQuestion === (questions.length - 1)) {
      savePlayerScore(points);
      savePlayerAssertions(assertions);
      this.setState({ endGame: true });
    } else {
      (this.setState({
        currentQuestion: currentQuestion + 1,
        timer: 30,
        stopTimer: false,
      },
      () => this.joinAnswers()));
    }
  }

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
  }

  correctAnswerSumPoints() {
    const { points, currentQuestion, timer, assertions } = this.state;
    const { questions, name, gravatarEmail } = this.props;
    const { difficulty } = questions[currentQuestion];
    const levelHard = 3;
    const basePoints = 10;
    let pointsDifficulty;
    switch (difficulty) {
    case 'easy':
      pointsDifficulty = 1;
      break;
    case 'medium':
      pointsDifficulty = 2;
      break;
    case 'hard':
      pointsDifficulty = levelHard;
      break;
    default:
      break;
    }
    const totalPoints = points + (basePoints + timer * pointsDifficulty);
    const totalAssertions = assertions + 1;
    this.setState({ points: totalPoints, assertions: totalAssertions },
      () => localStorage.setItem('state', JSON.stringify({
        player: {
          name,
          assertions: totalAssertions,
          score: totalPoints,
          gravatarEmail,
        } })));
  }

  chosenAnswer() {
    const buttons = document.querySelectorAll('[type=button]');
    buttons.forEach((button) => {
      if (button.dataset.answer === 'correct') {
        button.classList.add('correct');
      }
      if (button.dataset.answer === 'incorrect') {
        button.classList.add('incorrect');
      }
    });
  }

  startTimer() {
    const interval = 1000;
    const { timer, stopTimer } = this.state;
    const timerRun = setTimeout(() => {
      this.setState({ timer: timer - 1 });
    }, interval);
    if (timer === 0 || stopTimer) {
      clearTimeout(timerRun);
      this.chosenAnswer();
    }
  }

  renderOptions() {
    const { currentQuestion, options, timer, stopTimer } = this.state;
    const { questions } = this.props;
    return options.map(
      (option, index) => (option === questions[currentQuestion]
        .correct_answer ? (
          <button
            type="button"
            key={ index }
            data-testid="correct-answer"
            data-answer="correct"
            onClick={ () => {
              this.chosenAnswer();
              this.setState({ stopTimer: true });
              this.correctAnswerSumPoints(this);
            } }
            disabled={ !timer || stopTimer }
          >
            {option}
          </button>
        ) : (
          <button
            type="button"
            key={ index }
            data-testid={ `wrong-answer-${questions[
              currentQuestion
            ].incorrect_answers.indexOf(option)}` }
            onClick={ () => {
              this.chosenAnswer();
              this.setState({ stopTimer: true });
            } }
            data-answer="incorrect"
            disabled={ !timer || stopTimer }
          >
            {option}
          </button>
        )),
    );
  }

  renderMain() {
    const { currentQuestion, timer } = this.state;
    const { questions } = this.props;
    return (
      <main>
        {questions.length && (
          <div key={ currentQuestion }>
            {this.startTimer()}
            <p data-testid="question-category">
              {questions[currentQuestion].category}
            </p>
            <p data-testid="question-text">
              {questions[currentQuestion].question}
            </p>
            {this.renderOptions()}
            <p>{timer}</p>
          </div>
        )}
      </main>
    );
  }

  render() {
    const { name, gravatarEmail, questions } = this.props;
    const { points, timer, stopTimer, endGame, currentQuestion } = this.state;
    return (
      <>
        {endGame && (<Redirect to="/feedback" />)}
        <header>
          <img src={ `https://www.gravatar.com/avatar/${gravatarEmail}` } alt="" data-testid="header-profile-picture" />
          <p data-testid="header-player-name">{name}</p>
          <p data-testid="header-score">{points}</p>
          <p>{ `${currentQuestion + 1} of ${questions.length}`}</p>
        </header>
        {this.renderMain()}
        { (!timer || stopTimer)
        && (
          <button
            type="button"
            data-testid="btn-next"
            onClick={ this.nextQuestion }
          >
            Próxima
          </button>) }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
  token: state.player.token,
  assertions: state.player.assertions,
  questions: state.gameReducer.questions,
});

const mapDispatchToProps = (dispatch) => ({
  requestQuestions: (token) => dispatch(fetchQuestions(token)),
  savePlayerScore: (score) => dispatch(saveScore(score)),
  savePlayerAssertions: (assertions) => dispatch(saveAssertions(assertions)),
});

Game.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  requestQuestions: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  savePlayerScore: PropTypes.func.isRequired,
  savePlayerAssertions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
