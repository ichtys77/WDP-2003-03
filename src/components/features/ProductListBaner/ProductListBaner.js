import React from 'react';
// import PropTypes from 'prop-types';

import styles from './ProductListBaner.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProductListBaner = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row no-gutters align-items-center'>
        <div className={'col-12 col-md-12 ' + styles.baner}>
          <div className={styles.title}>
            <div>BEDROOM</div>
            <div>FURNITURE</div>
          </div>
          <div className={styles.subtitle}>
            ALWAYS <span>25%</span> OFF OR MORE
          </div>
        </div>
      </div>

      <div className={styles.breadcrumb}>
        <div>Home</div>
        <FontAwesomeIcon icon={faChevronRight} className={styles.svg}></FontAwesomeIcon>
        <div>Furniture</div>
      </div>
    </div>
  </div>
);

// ProductListBaner.propTypes = {};align-items-center

export default ProductListBaner;
