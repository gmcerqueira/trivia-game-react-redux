import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { fetchQuestions } from '../actions/gameAction';
import { saveScore, saveAssertions } from '../actions/userAction';
import chosenAnswer from '../services/auxFunctions';
import '../App.css';
import BtnNext from '../components/BtnNext';
import Header from '../components/Header';
import '../styles/Game.css';

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
    this.startTimer = this.startTimer.bind(this);
    this.correctAnswerSumPoints = this.correctAnswerSumPoints.bind(this);
  }

  componentDidMount() {
    const { name } = this.props;
    localStorage.setItem(
      'state',
      JSON.stringify({
        player: {
          name,
          assertions: 0,
          score: 0,
          gravatarEmail: 'gravatarEmail',
        },
      }),
    );
  }

  componentDidUpdate(prevProps) {
    const { questions, requestQuestions, token } = this.props;
    if (questions !== prevProps.questions) this.joinAnswers();
    if (token !== prevProps.token) requestQuestions(token);
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
    const { questions, savePlayerAssertions, name, gravatarEmail } = this.props;
    if (currentQuestion === questions.length - 1) {
      savePlayerAssertions(assertions);
      this.setState({ endGame: true }, () => {
        const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
        localStorage.removeItem('questions');
        localStorage.setItem(
          'ranking',
          JSON.stringify([...ranking, { name, score: points, gravatarEmail }]),
        );
      });
    } else {
      this.setState(
        {
          currentQuestion: currentQuestion + 1,
          timer: 30,
          stopTimer: false,
          options: [],
        },
        () => this.joinAnswers(),
      );
    }
  }

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
  }

  correctAnswerSumPoints() {
    const { points, currentQuestion, timer, assertions } = this.state;
    const { questions, name, gravatarEmail, savePlayerScore } = this.props;
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
    this.setState({ points: totalPoints, assertions: totalAssertions }, () => {
      savePlayerScore(totalPoints);
      localStorage.setItem(
        'state',
        JSON.stringify({
          player: {
            name,
            assertions: totalAssertions,
            score: totalPoints,
            gravatarEmail,
          },
        }),
      );
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
      chosenAnswer();
    }
  }

  renderOptions() {
    const { currentQuestion, options, timer, stopTimer } = this.state;
    const { questions } = this.props;
    return options
      .map((option, index) => (option === questions[currentQuestion].correct_answer ? (
        <button
          className="question-option"
          type="button"
          key={ index }
          data-testid="correct-answer"
          data-answer="correct"
          onClick={ () => {
            chosenAnswer();
            this.setState({ stopTimer: true });
            this.correctAnswerSumPoints(this);
          } }
          disabled={ !timer || stopTimer }
        >
          {option}
        </button>
      ) : (
        <button
          className="question-option"
          type="button"
          key={ index }
          data-testid={ `wrong-answer-${questions[
            currentQuestion
          ].incorrect_answers.indexOf(option)}` }
          onClick={ () => {
            chosenAnswer();
            this.setState({ stopTimer: true });
          } }
          data-answer="incorrect"
          disabled={ !timer || stopTimer }
        >
          {option}
        </button>
      )));
  }

  renderMain() {
    const { currentQuestion, timer, stopTimer } = this.state;
    const { questions } = this.props;
    return (
      <main className="main-component">
        <p className="main-timer">{`Timer: ${timer}`}</p>

        {questions.length && (
          <div className="main-container">
            {this.startTimer()}
            <div className="question-component">
              <div className="question-container">
                <p className="question-category" data-testid="question-category">
                  {questions[currentQuestion].category}
                </p>
                <p className="question-text" data-testid="question-text">
                  {questions[currentQuestion].question}
                </p>
              </div>
              <div className="question-options">
                {this.renderOptions()}
              </div>
            </div>
          </div>
        )}
        {(!timer || stopTimer) && (
          <BtnNext nextQuestion={ this.nextQuestion } />
        )}
      </main>
    );
  }

  render() {
    const { endGame } = this.state;
    return (
      <>
        {endGame && <Redirect to="/feedback" />}
        <Header />
        {this.renderMain()}
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
