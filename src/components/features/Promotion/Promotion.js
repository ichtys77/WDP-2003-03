import React from 'react';
import PropTypes from 'prop-types';

import { promoSection } from '../../../data/dataStore';

import styles from './Promotion.module.scss';

const Promotion = children => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col-12 col-md-6 ${styles.leftBox}`}>
          <div className={`col text-justify ${styles.boxCenter}`}>
            <div className={`row ${styles.textBox}`}>
              <div className='col align-self-end'>
                <h4>{promoSection.leftBanner.title}</h4>
                <h2>{promoSection.leftBanner.subtitle}</h2>
                <h2 className={styles.discount}>{promoSection.leftBanner.discount}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-12 col-md-6 ${styles.rightBox}`}>
          <div className={`col-12  ${styles.rightBoxes}`}>
            <div className={`row justify-content-around ${styles.textBox}`}>
              <div className='col align-self-center text-center'>
                <h3>
                  <strong>{promoSection.topBanner.bold}</strong>
                  {promoSection.topBanner.title}{' '}
                </h3>
                <h5>{promoSection.topBanner.subtitle}</h5>
                <h3 className={styles.gold}>{promoSection.topBanner.cost}</h3>
              </div>
            </div>
          </div>
          <div className={`col-12 ${styles.rightBoxes}`}>
            <div className={`row justify-content-end ${styles.textBox}`}>
              <div className='col align-self-center text-right'>
                <h4 className={styles.gold}>
                  <strong>{promoSection.bottomBanner.bold}</strong>
                  {promoSection.bottomBanner.title}
                </h4>
                <h5>{promoSection.bottomBanner.subtitle}</h5>
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
