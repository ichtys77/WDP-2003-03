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
  };
 
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

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.handleSlideSmChange(
          this.state.activeSlideSmall === this.props.hotDeals.length - 1
            ? 0
            : this.state.activeSlideSmall + 1
        ),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleSlideSmChange(newSlide) {
    setTimeout(() => this.setState({ activeSlideSmall: newSlide }), 100);
  }


  render () {
    
    const { slides, hotDeals} = this.props;
    const { activeSlideSmall, activeSlidePage } = this.state;

    const hotDealCount = this.props.hotDeals.length;

    //const slidesCount = slides.length;

    const dotsSlides = [];
    for (let i = 0; i < hotDealCount; i++) {
      dotsSlides.push(
        <li key={i}>
          <a
          onClick={() => {
            this.handleSlideSmChange(i);
            
            clearInterval(this.interval);
            
            this.interval = setInterval(
              () =>
                this.handleSlideSmChange(
                  this.state.activeSlideSmall === this.props.hotDeals.length - 1
                    ? 0
                    : this.state.activeSlideSmall + 1
                ),
              10000
            );

            clearInterval(this.interval);
          
          }}

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
              
              <TransitionGroup className='row'>
              
                {hotDeals
                .slice(activeSlideSmall * 1, (activeSlideSmall + 1) * 1)
                .map(item => (

                  <CSSTransition
                    key={item.id}
                    timeout={3000}
                    classNames='fade'
                    appear={true}
                    exit={false}
                    classNames={{
                      appear: styles.fadeAppear,
                      appearActive: styles.fadeAppearActive,
                      enter: styles.fadeEnter,
                      enterActive: styles.fadeEnterActive,
                      exit: styles.fadeExit,
                      exitActive: styles.fadeExitActive,
                      exitActiveDone: styles.fadeExitActiveDone,
                    }}
                  > 

                
                <div key ={item.id} className='col-12'>
                  <FeaturedProductsBox  {...item}/>
                </div>

                </CSSTransition>


                ))}
              </TransitionGroup>
              
            </div>

            <div className='col-8 col-md-8'>

              <TransitionGroup className='row'>

                {slides
                  .slice(activeSlidePage, activeSlidePage + 1)
                  .map(item => ( 
                    
                    
                    <CSSTransition
                        key={item.id}
                        timeout={3000}
                        classNames='fade'
                        appear={true}
                        exit={false}
                        classNames={{
                          appear: styles.fadeAppear,
                          appearActive: styles.fadeAppearActive,
                          enter: styles.fadeEnter,
                          enterActive: styles.fadeEnterActive,
                          exit: styles.fadeExit,
                          exitActive: styles.fadeExitActive,
                          exitActiveDone: styles.fadeExitActiveDone,
                        }}
                      > 

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
                  </CSSTransition>
                ))}
              </TransitionGroup> 


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