import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import '../styles/Feedback.css';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showMessage() {
    const { assertions } = this.props;
    const minAssertion = 3;

    if (assertions < minAssertion) {
      return 'Could be better...';
    }
    if (assertions >= minAssertion) {
      return 'Good job!';
    }
  }

  render() {
    const { score, assertions } = this.props;
    return (
      <>
        <Header />
        <main className="feedback-component">
          <div className="feedback-container">
            <p
              className="feedback-text"
              data-testid="feedback-text"
            >
              {this.showMessage(assertions)}

            </p>
            <p
              className="feedback-total-question"
              data-testid="feedback-total-question"
            >
              {`You guessed ${assertions} questions`}

            </p>
            <p
              className="feedback-total-score"
              data-testid="feedback-total-score"
            >
              {`Score: ${score}`}

            </p>
            <div className="feedback-buttons">
              <Link
                to="/"
                className="feedback-btn btn-play-again"
                data-testid="btn-play-again"
              >
                PLAY AGAIN
              </Link>
              <Link
                to="/ranking"
                className="feedback-btn btn-ranking"
                data-testid="btn-ranking"
              >
                SEE RANK
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
  assertions: state.player.assertions,
  questions: state.game.questions,
  score: state.player.score,
});

const mapDispatchToProps = () => ({});

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
