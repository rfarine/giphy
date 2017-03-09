import React, { PropTypes } from 'react';
import style from './button.scss';

const Button = ({
  isSubmit,
  onClick,
  text,
  type,
}) => {
  const buttonClass = style[type];
  const buttonType = isSubmit ? 'submit' : 'button';

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type={buttonType}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  isSubmit: false,
  type: 'primary',
};

Button.propTypes = {
  isSubmit: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
  ]),
};

export default Button;
