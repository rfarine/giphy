import React, { PropTypes } from 'react';
import style from './previewImage.scss';

const PreviewImage = ({
  preview,
  still,
}) => {
  return (
    <div
      className={style.component}
      style={{ backgroundImage: `url(${still})` }}
    >
      <div
        className={style.preview}
        style={{ backgroundImage: `url(${preview})` }}
      />
    </div>
  );
};

PreviewImage.propTypes = {
  preview: PropTypes.string.isRequired,
  still: PropTypes.string.isRequired,
};

export default PreviewImage;
