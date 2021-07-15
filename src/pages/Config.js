import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCategory, fetchCategories } from '../actions/configAction';

const falseSortReturn = -1;
class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { requestCategories } = this.props;
    requestCategories();
  }

  handleChange({ target: { value } }) {
    const { updateCategory } = this.props;
    console.log(value);
    updateCategory(value);
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <h1 data-testid="settings-title">Configurações</h1>
        <label htmlFor="categories">
          Category
          <select name="categories" id="category" onChange={ this.handleChange }>
            <option hidden aria-label="default" />
            {categories
              .sort((a, b) => ((a.name > b.name) ? 1 : falseSortReturn))
              .map(({ id, name }) => (
                <option key={ id } value={ id }>
                  {name}
                </option>
              ))}
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.config.categories,
});

const mapDispatchToProps = (dispatch) => ({
  requestCategories: () => dispatch(fetchCategories()),
  updateCategory: (category) => dispatch(changeCategory(category)),
});

Config.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  requestCategories: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Config);
