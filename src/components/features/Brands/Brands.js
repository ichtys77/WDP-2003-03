import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';

const Brands = children => (
  <div className={styles.root}>
    <div className='container'>
      <div className={`row align-items-center ${styles.row}`}>
        <div className='col-1 text-center'>
          <button>Prev</button>
        </div>
        <div className='col-10'>
          <div className='row'>
            <div className={`col-2 ${styles.imageOne}`}></div>
            <div className={`col-2 ${styles.imageTwo}`}></div>
            <div className={`col-2 ${styles.imageThree}`}></div>
            <div className={`col-2 ${styles.imageFour}`}></div>
            <div className={`col-2 ${styles.imageFive}`}></div>
            <div className={`col-2 ${styles.imageSix}`}></div>
          </div>
        </div>
        <div className='col-1'>
          <button>Next</button>
        </div>
      </div>
    </div>
  </div>
);

Brands.propTypes = {
  children: PropTypes.node,
};

export default Brands;
