import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/Ranking.css';

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
      <div className="ranking-page">
        <div className="ranking-container">
          <h1 className="ranking-title" data-testid="ranking-title">
            R a n k i n g
          </h1>
          <section className="ranking-table">
            {ranking && ranking.sort((a, b) => {
              const minusOne = -1;
              if (a.score < b.score) return 1;
              if (a.score > b.score) return minusOne;
              return 0;
            }).map((player, index) => (
              <div className="ranking-line" key={ index }>
                <img className="ranking-img" src={ `https://www.gravatar.com/avatar/${player.gravatarEmail}` } alt="" />

                <p className="ranking-name" data-testid={ `player-name-${index}` }>
                  { player.name }
                </p>
                <p className="ranking-score" data-testid={ `player-score-${index}` }>
                  {`${player.score} points`}
                </p>
              </div>
            ))}
          </section>

          <Link to="/" className="btn-go-home" data-testid="btn-go-home">
            HOME
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
