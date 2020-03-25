import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeaturedProducts.module.scss';

import Button from '../../common/Button/Button';
import FeaturedProductsBox from '../../common/FeaturedProductsBox/FeaturedProductsBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
      hotDeals: PropTypes.bool,
      promotion: PropTypes.bool,
      image: PropTypes.string,
    })
    ),
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        titleBold: PropTypes.string,
        subtitle: PropTypes.string,
        btnName: PropTypes.string,
        imgAlt: PropTypes.string,
        image: PropTypes.string,
      })
      )
  }
  
  state = { 
    activeSlideSmall: 0,
    activeSlidePage: 0,

    fade: 0,
  };

  handleSlideSmChange(newSlide) {
    this.setState({ activeSlideSmall: newSlide });
  }

  handleSlidePageChange(e, newSlidePage) {
    e.preventDefault();

    if (newSlidePage < 0) {
      this.setState({ activeSlidePage: 3 });
    } else if (newSlidePage > 3) {
      this.setState({ activeSlidePage: 0 });
    } else {
      this.setState({ 
        activeSlidePage: newSlidePage,
        fade: this.state.fade + 1,
       });
    } 

  }

  render () {
    
    const { products, slides } = this.props;
    const { activeSlideSmall, activeSlidePage, fade } = this.state;

    const hotDealProducts = products.filter(item => item.hotDeals == true);

    const hotDealCount = hotDealProducts.length;

    const slidesCount = slides.length;
    console.log('slidesCount', slidesCount);


    const dotsSlides = [];
    for (let i = 0; i < hotDealCount; i++) {
      dotsSlides.push(
        <li key={i}>
          <a
          onClick={() => this.handleSlideSmChange(i)}
          className={i === activeSlideSmall && styles.active}>
            page {i}
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
                  <ul>{dotsSlides}</ul>
                </div>
              </div>
              
              <div className='row'>
              
                {hotDealProducts
                .slice(activeSlideSmall * 1, (activeSlideSmall + 1) * 1)
                .map(item => (
                
                <div key ={item.id} className='col-12'>
                  <FeaturedProductsBox  {...item}/>
                  </div>
                ))}
              </div>
              
            </div>

            <div className='col-8 col-md-8'>

              
              <div className='row'>

              {/*<div className={styles.shopNow}>  

              <div className='col-12'>*/}

              {slides
              .slice(activeSlidePage, activeSlidePage + 1)
              .map(item => ( 
                
                /*
                <CSSTransition
                    key={item.id}
                    timeout={3000}
                    classNames='fade'
                    appear={true}
                    exit={false}
                  >  */


                <div key ={item.id} className={styles.shopNow}>

                <img src={item.image} alt={item.imgAlt} />

                <div className={styles.shadow}>
                  <div className={styles.title}>{item.title} <span>{item.titleBold}</span></div>
                  <div className={styles.subtitle}>{item.subtitle}</div>
                </div>
                
                <div className={styles.buttons}>
                  <Button variant="white">
                    {item.btnName}
                  </Button>
                </div>

                </div>

               /* </CSSTransition>  */



              ))}

             {/* </div>


               </div> */}


              </div> 


                {/* BUTTONS */}

                <div className={styles.arrowWrapper}>
                  <Button variant="arrow"
                  onClick={e => {
                    e.preventDefault();
                    this.handleSlidePageChange(e, activeSlidePage - 1)}}
                  >
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                  </Button>
                  <Button variant="arrow"
                  onClick={e => {
                    e.preventDefault();
                    this.handleSlidePageChange(e, activeSlidePage + 1)}}
                    >
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  </Button>
                </div>


            </div>







          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedProducts;