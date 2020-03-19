import React from 'react';
// import PropTypes from 'prop-types';
import styles from './PromoProduct.module.scss';

import Button from '../../common/Button/Button';

class PromoProduct extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.promo}>
          <img
            src='https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?cs=srgb&dl=green-wooden-chair-on-white-surface-963486.jpg&fm=jpg'
            alt='chair'
          ></img>
          <div className={styles.info}>
            <p>
              From
              <span>$50.80</span>
            </p>
            <h2>Modern Chair</h2>
            <Button variant='cta'>Shop now</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default PromoProduct;
