import React from 'react';
import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';
import PromoProduct from './../PromoProduct/PromoProductContainer';
import FurnitureGalleryActions from '../FurnitureGalleryActions/FurnitureGalleryActions';
import FurnitureGalleryPrice from '../FurnitureGalleryPrice/FurnitureGalleryPrice';
import { Link } from 'react-router-dom';

class FurnitureGallery extends React.Component {
  handleCategoryChange(event, newCategory) {
    this.setState({ activeCategory: newCategory });
    event.preventDefault();
    console.log('click');
  }

  render() {
    const { tabs, products } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-12 col-md-6 ' + styles.gallery}>
              <h3>Furniture Gallery</h3>
              <div className={styles.menu}>
                <ul>
                  {tabs.map(tab => (
                    <li key={tab.id}>
                      <Link
                        to='/'
                        onClick={event => this.handleCategoryChange(event, tab.id)}
                      >
                        {tab.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.product}>
                <img src={products[2].image} alt={products.name}></img>
                <FurnitureGalleryActions />
                <FurnitureGalleryPrice
                  name={products[2].name}
                  price={products[2].price}
                  promoPrice={products[2].promoPrice}
                  stars={products[2].stars}
                />
              </div>
              <div className={styles.slider}>
                <div className={styles.arrow}>
                  <a href='#'>&#x3c;</a>
                </div>
                <div className={styles.thumbnails}>
                  {products.slice(0, 6).map(product => (
                    <div key={product.id} className={styles.thumbnail}>
                      <img src={product.image} alt=''></img>
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
      promoPrice: PropTypes.number,
    })
  ),
  tabs: PropTypes.array,
};

export default FurnitureGallery;
