import React, { Component } from 'react';
import { connect } from 'react-redux';

class Config extends Component {
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
    return (
      <h1 data-testid="settings-title">
        Configurações
      </h1>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Config);
