import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';
import StickyBar from '../../common/StickyBar/StickyBar';
import ClientFeedback from '../../layout/ClientFeedback/ClientFeedback';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activePageFeedback: 0,
    activeCategory: 'bed',
    compareList: [],
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handlePageChangeFeedback(newPage) {
    this.setState({ activePageFeedback: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  compareProduct = (image, id) => {
    this.setState({
      compareList: [
        ...this.state.compareList,
        {
          id: id,
          image: image,
        },
      ],
    });
  };

  handleAddCompare = (image, id) => {
    if (this.state.compareList.length === 0) this.compareProduct(image, id);
    if (this.state.compareList.length <= 4) {
      const duplicate = this.state.compareList.findIndex(item => item.id === id);
      if (duplicate === -1) {
        this.compareProduct(image, id);
        this.props.changeCompare(id);
      } else {
        this.handleRemoveCompare(id);
      }
    }
  };

  handleRemoveCompare = index => {
    const compareProducts = this.state.compareList.filter(item => index !== item.id);
    this.setState({
      compareList: compareProducts,
    });
    this.props.changeCompare(index);
  };

  render() {
    const { categories, products, feedback } = this.props;
    const { activeCategory, activePage, activePageFeedback } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);
    const feedbackCount = Math.ceil(feedback.length);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    const dotsFeedback = [];
    for (let i = 0; i < feedbackCount; i++) {
      dotsFeedback.push(
        <li>
          <a
            onClick={() => this.handlePageChangeFeedback(i)}
            className={i === activePageFeedback && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>

          <SwipeComponent
            itemsCount={pagesCount}
            activeItem={this.state.activePage}
            swipeAction={this.handlePageChange.bind(this)}
          >
            <div className='row'>
              {categoryProducts
                .slice(activePage * 8, (activePage + 1) * 8)
                .map(item => (
                  <div key={item.id} className='col-12 col-lg-3'>
                    <ProductBox
                      {...item}
                      changeFav={this.props.addFav}
                      addToCompare={this.handleAddCompare}
                    />
                  </div>
                ))}
            </div>
          </SwipeComponent>

          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col ' + styles.heading}>
                <h3>Client feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dotsFeedback}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {feedback
              .slice(activePageFeedback * 1, (activePageFeedback + 1) * 1)
              .map(item => (
                <div key={item.id} className='col-12'>
                  <ClientFeedback {...item} />
                </div>
              ))}
          </div>
          {this.state.compareList.length ? (
            <StickyBar
              compareList={this.state.compareList}
              removeFromCompare={this.handleRemoveCompare}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  changeCompare: PropTypes.func,
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      picture: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  addFav: PropTypes.func,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  feedback: [],
};

export default NewFurniture;
