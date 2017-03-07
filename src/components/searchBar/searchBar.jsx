import React, { Component, PropTypes } from 'react';
import style from './searchBar.scss';

class SearchBar extends Component {
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
    const { onSubmit } = this.props;

    event.preventDefault();

    return onSubmit(this.state.value);
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

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
