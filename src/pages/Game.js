import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestions } from '../actions/gameAction';
import '../App.css';
// https://opentdb.com/api.php?amount=5&token=${seu-token-aqui}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      options: [],
      timer: 30,
    };
    this.joinAnswers = this.joinAnswers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.chosenAnswer = this.chosenAnswer.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    const { requestQuestions, token } = this.props;
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

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
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
    const { timer } = this.state;
    const timerRun = setTimeout(() => {
      this.setState({ timer: timer - 1 });
    }, interval);
    if (timer === 0) clearTimeout(timerRun);
  }

  renderMain() {
    const { currentQuestion, options, timer } = this.state;
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
            {options.map(
              (option, index) => (option === questions[currentQuestion]
                .correct_answer ? (
                  <button
                    type="button"
                    key={ index }
                    data-testid="correct-answer"
                    data-answer="correct"
                    onClick={ this.chosenAnswer }
                    disabled={ !timer }
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
                    onClick={ this.chosenAnswer }
                    data-answer="incorrect"
                    disabled={ !timer }
                  >
                    {option}
                  </button>
                )),
            )}
            <p>{timer}</p>
          </div>
        )}
      </main>
    );
  }

  render() {
    const { playerName, playerImg } = this.props;
    return (
      <>
        <header>
          <img src={ playerImg } alt="" data-testid="header-profile-picture" />
          <p data-testid="header-player-name">{playerName}</p>
          <span data-testid="header-score">0</span>
        </header>
        {this.renderMain()}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  playerName: state.userReducer.playerName,
  playerImg: state.userReducer.playerImg,
  token: state.userReducer.token,
  questions: state.gameReducer.questions,
});

const mapDispatchToProps = (dispatch) => ({
  requestQuestions: (token) => dispatch(fetchQuestions(token)),
});

Game.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerImg: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  requestQuestions: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
