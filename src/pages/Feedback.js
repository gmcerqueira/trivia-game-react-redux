import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import {
  fetchToken,
  saveName,
  saveEmail,
  saveImg,
} from '../actions/userAction';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <p data-testid="feedback-text">Fim de jogo</p>
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

Feedback.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
