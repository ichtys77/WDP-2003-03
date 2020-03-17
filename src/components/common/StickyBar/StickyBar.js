import React from 'react';
import styles from './StickyBar.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

const StickyBar = ({ compareList, removeFromCompare }) => {
  return (
    <div className={styles.sticky}>
      {compareList.map(item => (
        <div key={item.id} className={styles.photo}>
          <img alt={item.id} src={item.image}></img>
          <span className={styles.close} onClick={() => removeFromCompare(item.id)}>
            X
          </span>
        </div>
      ))}
      <Button variant='small'>Compare</Button>
    </div>
  );
};
StickyBar.propTypes = {
  compareList: PropTypes.array,
  removeFromCompare: PropTypes.func,
};

export default StickyBar;
