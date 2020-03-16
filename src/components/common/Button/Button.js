import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  children,
  variant,
  noHover,
  id,
  btn,
  favButton,
  changeFavStatus,
  className: propClassName,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(styles[propClassName]);

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  let Comp = 'a';

  if (noHover) {
    classes.push(styles.noHover);
    Comp = 'div';
  }
  const handleOnClick = (e, btn, changeFavStatus, id) => {
    e.preventDefault();
    switch (btn) {
      case 'favButton': {
        return changeFavStatus(id);
      }
      default:
        return null;
    }
  };

  return (
    <Comp
      href='#'
      {...props}
      onClick={e => handleOnClick(e, btn, changeFavStatus, id)}
      className={classes.join(' ')}
    >
      {children}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  id: PropTypes.string,
  btn: PropTypes.string,
  favButton: PropTypes.bool,
  changeFavStatus: PropTypes.func,
};

export default Button;
