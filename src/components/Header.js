import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { name, gravatarEmail, questions, score } = this.props;
    // const { points, timer, stopTimer, endGame, currentQuestion } = this.state;
    return (
      <header>
        <img
          src={ `https://www.gravatar.com/avatar/${gravatarEmail}` }
          alt=""
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">{score}</p>
        <p>{`${currentQuestion + 1} of ${questions.length}`}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
  questions: state.gameReducer.questions,
  score: state.userReducer.score,
  // token: state.player.token,
  // assertions: state.player.assertions,
});

const mapDispatchToProps = {

};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
