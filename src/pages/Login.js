import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  fetchToken,
  saveName,
  saveEmail,
  saveImg,
} from '../actions/userAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      playerName: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { email, playerName } = this.state;
    const {
      requestToken,
      saveImg,
      savePlayerName,
      savePlayerEmail,
    } = this.props;
    const emailValid = email.length <= 0 || playerName.length <= 0;
    return (
      <>
        <label htmlFor="email">
          Email do Gravatar
          <input
            data-testid="input-gravatar-email"
            id="email"
            type="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="playerName">
          Nome do Jogador
          <input
            data-testid="input-player-name"
            id="playerName"
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/game">
          <button
            data-testid="btn-play"
            type="submit"
            disabled={ emailValid }
            onClick={ () => {
              requestToken();
              savePlayerName(playerName);
              savePlayerEmail(email);
              saveImg(email);
            } }
          >
            Jogar
          </button>
        </Link>
        <Link to="/config">
          <button type="button" data-testid="btn-settings">
            Configurações
          </button>
        </Link>
      </>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  requestToken: () => dispatch(fetchToken()),
  saveImg: (email) => dispatch(saveImg(email)),
  savePlayerName: (name) => dispatch(saveName(name)),
  savePlayerEmail: (name) => dispatch(saveEmail(name)),
});

Login.propTypes = {
  requestToken: PropTypes.func.isRequired,
  savePlayerName: PropTypes.func.isRequired,
  savePlayerEmail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
