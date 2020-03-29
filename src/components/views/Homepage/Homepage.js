import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGalleryContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import Promotion from '../../features/Promotion/Promotion';
import Brands from '../../features/Brands/Brands';
import FeaturedProducts from '../../features/FeaturedProducts/FeaturedProductsContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeaturedProducts />
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
    <Feedback />
    <FurnitureGallery />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
