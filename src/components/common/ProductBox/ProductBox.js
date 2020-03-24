import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  image,
  favorite,
  compare,
  oldPrice,
  changeFav,
  addToCompare,
}) => {
  const handleChangeFav = e => {
    e.preventDefault();
    changeFav(id);
  };

  const handleCompare = e => {
    e.preventDefault();
    addToCompare(image, id);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <img src={image} alt={name} />
        <div className={styles.buttons}>
          <Button className={styles.options} variant='small'>
            Quick View
          </Button>
          <Button className={styles.options} variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
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
          <Button
            variant='outline'
            className={favorite ? 'active' : ''}
            onClick={e => handleChangeFav(e, id)}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={compare ? 'active' : ''}
            onClick={e => handleCompare(e, image, id)}
          >
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

ProductBox.propTypes = {
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

export default ProductBox;
