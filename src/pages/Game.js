import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {fetchQuestions} from '../actions/gameAction'
//https://opentdb.com/api.php?amount=5&token=${seu-token-aqui}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount ( ) {
  const {requestQuestions , token} = this.props;
  requestQuestions(token);

  }

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { playerName, playerImg, questions } = this.props;
    return (
      <> 
      <header>
        <img src={ playerImg } alt="" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{playerName}</p>
        <span data-testid="header-score">0</span>
      </header>
      <main>
      {questions.map((question, index) => {
        return (
        <div key={ index }>
          <p data-testid="question-category">
          {question.category}
          </p>
          <p data-testid="question-text">
            {question.question}
          </p>
        </div>)
      })}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
