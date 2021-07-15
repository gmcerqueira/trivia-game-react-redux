import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  changeCategory,
  changeDifficulty,
  fetchCategories,
} from '../actions/configAction';

const falseSortReturn = -1;
class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { requestCategories } = this.props;
    requestCategories();
  }

  renderCategoryOptions() {
    const { categories, updateCategory } = this.props;
    return (
      <label htmlFor="categories">
        Category
        <select
          name="categories"
          id="category"
          onChange={ ({ target: { value } }) => updateCategory(value) }
        >
          <option hidden aria-label="default" />
          {categories
            .sort((a, b) => (a.name > b.name ? 1 : falseSortReturn))
            .map(({ id, name }) => (
              <option key={ id } value={ id }>
                {name}
              </option>
            ))}
        </select>
      </label>
    );
  }

  renderDifficultyOptions() {
    const { updateDifficulty } = this.props;
    return (
      <label htmlFor="categories">
        Category
        <select
          name="categories"
          id="category"
          onChange={ ({ target: { value } }) => updateDifficulty(value) }
        >
          <option hidden aria-label="default" />
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <h1 data-testid="settings-title">Configurações</h1>
        {this.renderCategoryOptions()}
        {this.renderDifficultyOptions()}
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
  updateDifficulty: (difficulty) => dispatch(changeDifficulty(difficulty)),
});

Config.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  requestCategories: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Config);
