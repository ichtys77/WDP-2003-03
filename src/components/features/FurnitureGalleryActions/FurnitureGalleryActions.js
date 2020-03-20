import React from 'react';
import PropTypes from 'prop-types';

import styles from './FurnitureGalleryActions.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const FurnitureGalleryActions = ({
  favorite,
  id,
  changeFav,
  addToCompare,
  image,
  compare,
}) => {
  /* const handleChangeFav = e => {
    e.preventDefault();
    changeFav(id);
  };

  const handleCompare = e => {
    e.preventDefault();
    addToCompare(image, id);
  }; */

  return (
    <div className={styles.actions}>
      <div className={styles.action}>
        <div className={styles.icon}>
          <Button
            variant='outlineColor'
            /* className={favorite ? 'active' : ''}
            onClick={e => handleChangeFav(e, id)} */
          >
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.info}>Like</div>
      </div>

      <div className={styles.action}>
        <div className={styles.icon}>
          <Button
            variant='outlineColor'
            /* className={compare ? 'active' : ''}
            onClick={e => handleCompare(e, image, id)} */
          >
            <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.info}>Compare</div>
      </div>
      <div className={styles.action}>
        <div className={styles.icon}>
          <Button variant='outlineColor'>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.info}>Details</div>
      </div>
      <div className={styles.action}>
        <div className={styles.icon}>
          <Button variant='outlineColor'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.info}>Buy now</div>
      </div>
    </div>
  );
};

FurnitureGalleryActions.propTypes = {
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  image: PropTypes.string,
  id: PropTypes.string,
  changeFav: PropTypes.func,
  addToCompare: PropTypes.func,
};

export default FurnitureGalleryActions;
