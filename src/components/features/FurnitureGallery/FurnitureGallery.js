import React from 'react';
import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';
import PromoProduct from './../PromoProduct/PromoProductContainer';
import FurnitureGalleryActions from '../FurnitureGalleryActions/FurnitureGalleryActions';
import FurnitureGalleryPrice from '../FurnitureGalleryPrice/FurnitureGalleryPrice';
import { Link } from 'react-router-dom';

class FurnitureGallery extends React.Component {
  state = {
    activePage: 0,
    activeProduct: 0,
    activeCategory: 'topseller',
  };

  handleProductChange(newProduct) {
    this.setState({ activeProduct: newProduct });
  }

  handleCategoryChange(event, newCategory, newImage) {
    this.setState({
      activeCategory: newCategory,
    });
    event.preventDefault();
  }

  handelGalleryFurther(event) {
    const newFurther = this.state.activePage < 0 ? 0 : this.state.activePage - 1;
    this.setState({ activePage: newFurther });
    event && event.preventDefault();
  }

  handelGalleryBack(event, categoryProducts) {
    const newBack =
      this.state.activePage >= categoryProducts.length
        ? categoryProducts.length
        : this.state.activePage + 1;
    this.setState({ activePage: newBack });
    event && event.preventDefault();
  }

  render() {
    const { tabs, products } = this.props;
    const { activePage, activeProduct, activeCategory } = this.state;

    const categoryProducts = products.filter(item => item.tabs === activeCategory);

    const newactivePage =
      activePage < 0 ? this.setState({ activePage: 0 }) : activePage;

    const firstPage =
      newactivePage + 6 >= categoryProducts.length
        ? categoryProducts.length - 6
        : newactivePage;

    const lastPage = firstPage + 6;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={`col-12 col-md-6 ${styles.gallery}`}>
              <h3>Furniture Gallery</h3>
              <div className={styles.menu}>
                <ul>
                  {tabs.map(tab => (
                    <li
                      className={tab.id === activeCategory && styles.active}
                      key={tab.id}
                    >
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
                {categoryProducts.slice(activeProduct, activeProduct + 1).map(item => (
                  <div key={item.id} className={styles.product}>
                    <img src={item.image} alt='' />
                    <FurnitureGalleryActions />
                    <FurnitureGalleryPrice
                      name={item.name}
                      price={item.price}
                      oldPrice={item.oldPrice}
                      stars={item.stars}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.slider}>
                <div className={styles.arrow}>
                  <Link
                    to='/'
                    href='#'
                    onClick={event =>
                      this.handelGalleryFurther(event, categoryProducts)
                    }
                  >
                    &#x3c;
                  </Link>
                </div>
                <div className={styles.thumbnails}>
                  {categoryProducts.slice(firstPage, lastPage).map(product => (
                    <div key={product.id} className={styles.thumbnail}>
                      <img
                        src={product.image}
                        alt=''
                        onClick={() =>
                          this.handleProductChange(categoryProducts.indexOf(product))
                        }
                      ></img>
                    </div>
                  ))}
                </div>
                <div className={styles.arrow}>
                  <Link
                    to='/'
                    onClick={event => this.handelGalleryBack(event, categoryProducts)}
                  >
                    &#x3e;
                  </Link>
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
      oldPrice: PropTypes.number,
    })
  ),
  tabs: PropTypes.array,
};

export default FurnitureGallery;
