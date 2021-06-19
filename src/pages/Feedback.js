import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showMessage() {
    const { assertions } = this.props;
    const minAssertion = 3;

    if (assertions < minAssertion) {
      return 'Podia ser melhor...';
    } if (assertions >= minAssertion) {
      return 'Mandou bem!';
    }
  }

  render() {
    const { score, assertions } = this.props;
    return (
      <>
        <Header />
        <main>
          <p data-testid="feedback-text">{this.showMessage(assertions)}</p>
          <p data-testid="feedback-total-question">{assertions}</p>
          <p data-testid="feedback-total-score">{score}</p>
          <Link to="/">
            <button type="button" data-testid="btn-play-again">Jogar novamente</button>
          </Link>
          <Link to="/ranking">
            <button type="button" data-testid="btn-ranking">Ver Ranking</button>
          </Link>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
  assertions: state.player.assertions,
  questions: state.gameReducer.questions,
  score: state.player.score,
});

const mapDispatchToProps = () => ({});

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
