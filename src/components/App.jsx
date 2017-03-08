import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SearchBar from 'components/searchBar/searchBar';
import 'styles/global.scss';
import style from './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.submitSearch = this.submitSearch.bind(this);
  }

  submitSearch(searchTerm) {
    const { dispatch } = this.props;

    dispatch(push(`results/${searchTerm}`));
  }

  render() {
    const { children } = this.props;
    return (
      <div className={style.container}>
        <SearchBar onSubmit={this.submitSearch} />
        {children}
      </div>
    );
  }
}

App.defaultProps = {
  children: <div />,
};

App.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
