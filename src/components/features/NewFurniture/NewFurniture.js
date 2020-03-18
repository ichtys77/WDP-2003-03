import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';
import StickyBar from '../../common/StickyBar/StickyBar';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    compareList: [],
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  compareProduct = (image, id) => {
    console.log('ok', image, id);
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
    if (this.state.compareList.length < 4) {
      this.state.compareList.filter(item =>
        item.id !== id ? this.compareProduct(image, id) : console.log('duplikat.')
      );
      this.props.changeCompare(id);
    } else {
      console.log('Nie porownac więcej produktow');
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
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

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
  addFav: PropTypes.func,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
