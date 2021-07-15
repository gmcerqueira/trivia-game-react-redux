import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  fetchToken,
  saveName,
  saveEmail,
  saveImg,
} from '../actions/playerAction';

import '../styles/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      playerName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
  }

  renderButtons() {
    const { email, playerName } = this.state;
    const emailValid = email.length <= 0 || playerName.length <= 0;
    const { requestToken, savePlayerImg, savePlayerName, savePlayerEmail } = this.props;
    return (
      <>
        <Link to="/game">
          <button
            className="login-btn play-btn"
            data-testid="btn-play"
            type="submit"
            disabled={ emailValid }
            onClick={ () => {
              requestToken();
              savePlayerName(playerName);
              savePlayerEmail(email);
              savePlayerImg(email);
            } }
          >
            Jogar
          </button>
        </Link>
        <Link to="/config">
          <button
            className="login-btn config-btn"
            type="button"
            data-testid="btn-settings"
          >
            Configurações
          </button>
        </Link>
      </>
    );
  }

  render() {
    return (
      <div className="login-page">
        <h1 className="login-title">T R I V I A</h1>
        <div className="login-container">
          <label className="login-label" htmlFor="email">
            <input
              // autoComplete="off"
              className="login-input"
              data-testid="input-gravatar-email"
              id="email"
              type="email"
              placeholder="Email"
              onChange={ this.handleChange }
            />
          </label>
          <label className="login-label" htmlFor="playerName">
            <input
              // autoComplete="off"
              className="login-input"
              data-testid="input-player-name"
              id="playerName"
              type="text"
              placeholder="Player name"
              onChange={ this.handleChange }
            />
          </label>
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  requestToken: () => dispatch(fetchToken()),
  savePlayerImg: (email) => dispatch(saveImg(email)),
  savePlayerName: (name) => dispatch(saveName(name)),
  savePlayerEmail: (name) => dispatch(saveEmail(name)),
});

Login.propTypes = {
  requestToken: PropTypes.func.isRequired,
  savePlayerName: PropTypes.func.isRequired,
  savePlayerEmail: PropTypes.func.isRequired,
  savePlayerImg: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
