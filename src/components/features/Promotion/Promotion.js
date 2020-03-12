import React from 'react';
import PropTypes from 'prop-types';

import { leftBanner, topBanner, bottomBanner } from '../../../data/dataStore';

import styles from './Promotion.module.scss';

const Promotion = children => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col-6 ${styles.leftBox}`}>
          <div className={`col text-justify ${styles.boxCenter}`}>
            <div className={`row ${styles.textBox}`}>
              <div className='col align-self-end'>
                <p>{leftBanner.title}</p>
                <p>{leftBanner.subtitle}</p>
                <p className={styles.discount}>{leftBanner.discount}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={'col-6'}>
          <div className={`col-12  ${styles.rightBox}`}>
            <div className={`row justify-content-around ${styles.textBox}`}>
              <div className='col align-self-center text-center'>
                <p>
                  <b>{topBanner.bold}</b>
                  {topBanner.title}{' '}
                </p>
                <p>{topBanner.subtitle}</p>
                <p>{topBanner.cost}</p>
              </div>
            </div>
          </div>
          <div className={`col-12 ${styles.rightBox}`}>
            <div className={`row justify-content-end ${styles.textBox}`}>
              <div className='col align-self-center text-right'>
                <p>
                  <b>{bottomBanner.bold}</b>
                  {bottomBanner.title}
                </p>
                <p>{bottomBanner.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Promotion.propTypes = {
  children: PropTypes.node,
};

export default Promotion;
