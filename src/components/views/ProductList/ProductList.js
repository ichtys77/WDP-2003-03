import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

class ProductList extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const path = window.location.pathname;
    const pagePath = path.slice(1, path.length).toUpperCase();

    return (
      <div className={styles.root}>
        This is ProductList
        <div className={styles.category}>{pagePath}</div>
      </div>
    );
  }
}

export default ProductList;
