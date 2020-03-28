import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromoProduct.module.scss';
import Button from '../../common/Button/Button';

const PromoProduct = ({ products }) => (
  <div className={'col-12 col-md-6 d-none d-md-block ' + styles.promotion}>
    <div className={styles.root}>
      <div className={styles.promo}>
        <img src={products[4].image} alt={products[0].category}></img>
        <div className={styles.info}>
          <p>
            From
            <span>{'$' + products[4].price}</span>
          </p>
          <h2>{products[0].category}</h2>
          <Button variant='cta'>Shop now</Button>
        </div>
      </div>
    </div>
  </div>
);

PromoProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      image: PropTypes.string,
      oldPrice: PropTypes.number,
    })
  ),
};

export default PromoProduct;
