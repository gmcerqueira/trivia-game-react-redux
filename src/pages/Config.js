import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/configAction';

class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateCategories = this.updateCategories.bind(this);
  }

  componentDidMount() {
    this.updateCategories();
  }

  async updateCategories() {
    const { requestCategories } = this.props;
    const categories = await requestCategories();

    this.setState({ categories });
  }

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
  }

  render() {
    return <h1 data-testid="settings-title">Configurações</h1>;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  requestCategories: () => dispatch(fetchCategories()),
});

Config.propTypes = {
  requestCategories: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Config);
