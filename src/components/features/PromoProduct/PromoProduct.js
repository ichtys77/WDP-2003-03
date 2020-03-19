import React from 'react';
// import PropTypes from 'prop-types';
import styles from './PromoProduct.module.scss';

import Button from '../../common/Button/Button';

class PromoProduct extends React.Component {
  render() {
    return (
      <div className={'col-12 col-md-6 ' + styles.promotion}>
        <div className={styles.root}>
          <div className={styles.promo}>
            <img
              src='https://images.pexels.com/photos/709767/pexels-photo-709767.png?cs=srgb&dl=person-taking-photo-of-gray-pendant-lamp-over-brown-wooden-709767.jpg&fm=jpg'
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
      </div>
    );
  }
}

export default PromoProduct;
