import React, { Component, PropTypes } from 'react';
import style from './previewImage.scss';

class PreviewImage extends Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.state = {
      backgroundImage: props.still,
    };
  }

  onMouseOver() {
    const { preview } = this.props;

    this.setState({
      backgroundImage: preview,
    });
  }

  onMouseOut() {
    const { still } = this.props;

    this.setState({
      backgroundImage: still,
    });
  }

  render() {
    return (
      <div
        className={style.component}
        style={{ backgroundImage: `url(${this.state.backgroundImage})` }}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      />
    );
  }
}

PreviewImage.propTypes = {
  preview: PropTypes.string.isRequired,
  still: PropTypes.string.isRequired,
};

export default PreviewImage;
