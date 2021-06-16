import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { name, gravatarEmail, questions, points } = this.props;
    const { currentQuestion } = this.state;
    return (
      <header>
        <img src={ `https://www.gravatar.com/avatar/${gravatarEmail}` } alt="" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">{points}</p>
        <p>{ `${currentQuestion + 1} of ${questions.length}`}</p>
        <p data-testid="feedback-text">Fim de jogo</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
  questions: state.gameReducer.questions,
  points: state.player.score,
});

const mapDispatchToProps = () => ({});

Feedback.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  points: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
