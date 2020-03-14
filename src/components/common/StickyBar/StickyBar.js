import React from 'react';
import styles from './StickyBar.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

const StickyBar = ({ compareList, removeFromCompare }) => (
  <div className={styles.sticky}>
    {compareList.map(item => (
      <div key={item} className={styles.photo}>
        <img alt={item} src={item}></img>
        <a href='#' className={styles.close} onClick={() => removeFromCompare(item)}>
          X
        </a>
      </div>
    ))}
    <Button variant='small'>Compare</Button>
  </div>
);

StickyBar.propTypes = {
  compareList: PropTypes.array,
  removeFromCompare: PropTypes.func,
};

export default StickyBar;
