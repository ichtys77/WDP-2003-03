import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeaturedProductsBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const FeaturedProductsBox = ({
  id,
  name,
  price,
  oldPrice,
  stars,
  image,
  favorite,
  compare,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt={name} />
        <div className={styles.buttons}>
          <Button className={styles.options} variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>

        <div className={styles.promoCounter}>
          <div className={styles.circle}>
            <span>25</span>
            <span>DAYS</span>
          </div>
          <div className={styles.circle}>
            <span>10 </span>
            <span>HRS</span>
          </div>
          <div className={styles.circle}>
            <span>45 </span>
            <span>MINS</span>
          </div>
          <div className={styles.circle}>
            <span>30 </span>
            <span>SECS</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h5>{name}</h5>

        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline' className={favorite ? 'active' : ''}>
            <FontAwesomeIcon icon={faEye}>See later</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={favorite ? 'active' : ''}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={compare ? 'active' : ''}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {oldPrice && (
            <Button noHover variant='outline'>
              <div className={styles.oldPrice}>$ {oldPrice}</div>
            </Button>
          )}
          <Button className={styles.priceBtn} noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

FeaturedProductsBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.bool,
  id: PropTypes.string,
  changeFav: PropTypes.func,
  compare: PropTypes.bool,
  image: PropTypes.string,
  oldPrice: PropTypes.number,
  addToCompare: PropTypes.func,
};

export default FeaturedProductsBox;
