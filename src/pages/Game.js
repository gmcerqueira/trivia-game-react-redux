import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestions } from '../actions/gameAction';
// https://opentdb.com/api.php?amount=5&token=${seu-token-aqui}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      options: [],
    };
    this.joinAnswers = this.joinAnswers.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { playerName, playerImg, questions } = this.props;
    const { currentQuestion, options } = this.state;
    return (
      <>
        <header>
          <img src={ playerImg } alt="" data-testid="header-profile-picture" />
          <p data-testid="header-player-name">{playerName}</p>
          <span data-testid="header-score">0</span>
        </header>
        <main>
          {questions && (
            <div key={ currentQuestion }>
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
                    >
                      {option}
                    </button>
                  )),
              )}
            </div>
          )}
        </main>
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
