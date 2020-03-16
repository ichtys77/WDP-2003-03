import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

class Button extends React.Component {
  handleOnClick = (event, btn, image, id, addToCompare) => {
    event.preventDefault();
    switch (btn) {
      case 'compareButton': {
        return addToCompare(image, id);
      }
      default:
        return null;
    }
  };

  render() {
    const {
      children,
      variant,
      noHover,
      addToCompare,
      btn,
      id,
      image,
      className: propClassName,
      ...props
    } = this.props;

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
        href='#'
        {...props}
        onClick={e => this.handleOnClick(e, btn, image, id, addToCompare)}
        className={classes.join(' ')}
      >
        {children}
      </Comp>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  addToCompare: PropTypes.func,
  image: PropTypes.string,
  id: PropTypes.string,
  btn: PropTypes.string,
};

export default Button;
