import React from 'react';
import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';
import PromoProduct from './../PromoProduct/PromoProduct';
import FurnitureGalleryActions from '../FurnitureGalleryActions/FurnitureGalleryActions';
import FurnitureGalleryPrice from '../FurnitureGalleryPrice/FurnitureGalleryPrice';
import initialState from '../../../redux/initialState';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

class FurnitureGallery extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-12 col-md-6 ' + styles.gallery}>
              <h3>Furniture Gallery</h3>
              <div className={styles.menu}>
                <ul>
                  {initialState.tabs.map(tab => (
                    <li key={tab.id}>
                      <a href='#' className={'d-none d-md-block'}>
                        {tab.name}
                      </a>
                      <a href='#' className={'d-md-none'}>
                        <FontAwesomeIcon icon={tab.icon}></FontAwesomeIcon>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.product}>
                <img
                  src={initialState.products[2].image}
                  alt={initialState.products.name}
                ></img>
                <FurnitureGalleryActions />
                <FurnitureGalleryPrice
                  name={initialState.products[2].name}
                  price={initialState.products[2].price}
                  promoPrice={initialState.products[2].promoPrice}
                  stars={initialState.products[2].stars}
                />
              </div>
              <div className={styles.slider}>
                <div className={styles.arrow}>
                  <a href='#'>&#x3c;</a>
                </div>
                <div className={styles.thumbnails}>
                  {initialState.products.slice(0, 6).map(product => (
                    <div key={product.id} className={styles.thumbnail}>
                      <img src={product.image} alt={initialState.products.name}></img>
                    </div>
                  ))}
                </div>
                <div className={styles.arrow}>
                  <a href='#'>&#x3e;</a>
                </div>
              </div>
            </div>
            <PromoProduct />
          </div>
        </div>
      </div>
    );
  }
}

FurnitureGallery.propTypes = {
  products: PropTypes.node,
  tabs: PropTypes.node,
};

export default FurnitureGallery;
