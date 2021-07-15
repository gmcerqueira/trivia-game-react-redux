import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/Header.css';

class Header extends Component {
  render() {
    const { name, gravatarEmail, score } = this.props;
    // const { points, timer, stopTimer, endGame, currentQuestion } = this.state;
    return (
      <header className="header-component">
        <div className="header-container">
          <div className="header-profile">
            <img
              className="header-profile-img"
              src={ `https://www.gravatar.com/avatar/${gravatarEmail}` }
              alt=""
              data-testid="header-profile-picture"
            />
            <p data-testid="header-player-name">{name}</p>
          </div>
          <p data-testid="header-score">{`Score : ${score}`}</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
  questions: state.game.questions,
  score: state.player.score,
  // token: state.player.token,
  // assertions: state.player.assertions,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
