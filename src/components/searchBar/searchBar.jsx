import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import style from './searchBar.scss';

export class UnwrappedSearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;

    event.preventDefault();

    return dispatch(push(`results/${this.state.value}`));
  }

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <input
          className={style.bar}
          onChange={this.handleChange}
          placeholder="Search..."
          type="text"
        />
        <input
          className={style.button}
          type="submit"
          value="Search"
        />
      </form>
    );
  }
}

UnwrappedSearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(UnwrappedSearchBar);
