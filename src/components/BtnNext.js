import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/BtnNext.css';

export default class BtnNext extends Component {
  render() {
    const { nextQuestion } = this.props;
    return (
      <button
        className="next-btn"
        type="button"
        data-testid="btn-next"
        onClick={ nextQuestion }
      >
        NEXT
      </button>
    );
  }
}

BtnNext.propTypes = {
  nextQuestion: PropTypes.func.isRequired,
};
