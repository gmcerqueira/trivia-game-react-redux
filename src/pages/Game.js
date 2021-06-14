import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { playerName, playerImg } = this.props;
    return (
      <header>
        <img src={ playerImg } alt="" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{playerName}</p>
        <span data-testid="header-score">0</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  playerName: state.userReducer.playerName,
  playerImg: state.userReducer.playerImg,
});

const mapDispatchToProps = () => ({
});

Game.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerImg: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
