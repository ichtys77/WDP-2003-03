import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeaturedProducts.module.scss';

import Button from '../../common/Button/Button';
import FeaturedProductsBox from '../../common/FeaturedProductsBox/FeaturedProductsBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


class FeaturedProducts extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      oldprice: PropTypes.number,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      hotDeals: PropTypes.string,
      promotion: PropTypes.bool,
      image: PropTypes.string,
    })
    )
  }

  static defaultProps = {
    title: 'INDOOR',
    titleBold: 'FURNITURE',
    subtitle: 'SAVE UP TO 50% OF ALL FURNITURE',
    btnName: 'SHOP NOW',
    imgAlt: 'discount',
    imgBg: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  }
  
  /*
  state = { };
  */

  render () {
    
    const { products, title, titleBold, subtitle, btnName, imgBg, imgAlt } = this.props;
    const hotDealProducts = products.filter(item => item.hotDeals === true);

    const dots = [];
    for (let i = 0; i < 3; i++) {
      dots.push(
        <li>
          <a>
            {/*page {i}  */}
          </a>
        </li>
      );
    }
    
    return (

      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-4 col-md-4'>
              <div className={styles.altPanel}>
                <div>HOT DEALS</div>

                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>

              <div>
                {hotDealProducts.map(item => (
                  <FeaturedProductsBox key ={item.id} {...item}/>
                ))}
              </div>
            </div>

            <div className='col-8 col-md-8'>
              <div className={styles.shopNow}>

                <img src={imgBg} alt={imgAlt} />

                <div className={styles.shadow}>
                  <div className={styles.title}>{title} <span>{titleBold}</span></div>
                  <div className={styles.subtitle}>{subtitle}</div>
                </div>
                
                <div className={styles.buttons}>
                  <Button variant="white">
                    {btnName}
                  </Button>
                </div>
      
                <div className={styles.arrow}>
                  <div className={styles.arrowLeft}>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </div>
                  <div className={styles.arrowRight}>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedProducts;