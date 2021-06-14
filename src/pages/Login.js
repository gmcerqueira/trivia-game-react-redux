import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        email:'',
        playerName:'',
      }
    }

    handleChange = ({target:{value, id}}) => {
      this.setState ({
        [id]:value,
      })
    }
  render() {
    const { email, playerName } = this.state;
    const emailValid = !(email.length > 0) || !(playerName.length > 0) 
    return (
      <>
        <label htmlFor="email">
          Email do Gravatar
          <input
            data-testid="input-gravatar-email"
            id="email"
            type="email"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="playerName">
          Nome do Jogador
          <input
            data-testid="input-player-name"
            id="playerName"
            type="text"
            onChange={this.handleChange}
          />
            <button data-testid="btn-play" type="submit" disabled={emailValid}>Jogar</button>
        </label>
      </>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
