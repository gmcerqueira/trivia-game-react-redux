import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BtnNextQuestion extends Component {
  render() {
    const { nextQuestion } = this.props;
    return (
      <button
        type="button"
        data-testid="btn-next"
        onClick={ nextQuestion }
      >
        Próxima
      </button>
    );
  }
}

BtnNextQuestion.propTypes = {
  nextQuestion: PropTypes.func.isRequired,
};
