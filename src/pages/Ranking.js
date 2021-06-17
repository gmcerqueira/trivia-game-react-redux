import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';

class Ranking extends Component {
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
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    return (
      <>
      <h1 data-testid="ranking-title">
        Ranking
      </h1>

      <table>
        <tr>
          <th>
            Image
          </th>
          <th>
            Name
          </th>
          <th>
            Score
          </th>
        </tr>
          { ranking && ranking.sort((a,b) => {
            if (a.score < b.score) return 1
            if (a.score > b.score) return -1
            return 0
          }).map((player, index) => 
            <tr>
              <td>
                <img src={ `https://www.gravatar.com/avatar/${player.gravatarEmail}` } alt="" />
              </td>
              <td data-testid={ `player-name-${index}` }>
                { player.name }
              </td>
              <td data-testid={ `player-score-${index}` }>
                { player.score }
              </td>
            </tr>
          ) }
      </table>
      </>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
