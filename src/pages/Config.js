import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeCategory,
  changeDifficulty,
  changeType,
  fetchCategories,
} from '../actions/configAction';
import '../styles/Config.css';
import Loading from '../components/Loading';

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
      <label htmlFor="categories" className="config-label">
        <select
          name="categories"
          id="category"
          className="config-select"
          onChange={ ({ target: { value } }) => updateCategory(value) }
        >
          <option hidden aria-label="default">
            Category
          </option>
          {categories
            .sort((a, b) => (a.name > b.name ? 1 : falseSortReturn))
            .map(({ id, name }) => (
              <option key={ id } value={ id } className="config-option">
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
      <label htmlFor="categories" className="config-label">
        <select
          name="difficulties"
          id="difficulty"
          className="config-select"
          onChange={ ({ target: { value } }) => updateDifficulty(value) }
        >
          <option hidden aria-label="default">
            Difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
    );
  }

  renderTypeOptions() {
    const { updateType } = this.props;
    return (
      <label htmlFor="categories" className="config-label">
        <select
          name="types"
          id="type"
          className="config-select"
          onChange={ ({ target: { value } }) => updateType(value) }
        >
          <option hidden aria-label="default">
            Type
          </option>
          <option value="boolean">True or False</option>
          <option value="multiple">Multiple choice</option>
        </select>
      </label>
    );
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div className="config-page">
        <h1 className="config-title" data-testid="settings-title">Settings</h1>
        {isFetching ? (
          <Loading />
        ) : (
          <div className="config-container">
            {this.renderCategoryOptions()}
            {this.renderDifficultyOptions()}
            {this.renderTypeOptions()}
            <Link to="/" className="save-btn">SAVE</Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ config }) => ({
  categories: config.categories,
  isFetching: config.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  requestCategories: () => dispatch(fetchCategories()),
  updateCategory: (category) => dispatch(changeCategory(category)),
  updateDifficulty: (difficulty) => dispatch(changeDifficulty(difficulty)),
  updateType: (type) => dispatch(changeType(type)),
});

Config.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  requestCategories: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Config);
