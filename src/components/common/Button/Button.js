import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  children,
  variant,
  noHover,
  addToCompare,
  compareBtn,
  id,
  href,
  image,
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

  return (
    <Comp
      href={href}
      {...props}
      onClick={compareBtn ? () => addToCompare(image, id) : null}
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
  addToCompare: PropTypes.func,
  image: PropTypes.string,
  id: PropTypes.string,
  href: PropTypes.bool,
  compareBtn: PropTypes.bool,
};

export default Button;
