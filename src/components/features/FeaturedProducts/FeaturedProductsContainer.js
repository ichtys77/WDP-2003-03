import { connect } from 'react-redux';

import FeaturedProducts from './FeaturedProducts';

import { getAll, getHotDeal } from '../../../redux/productsRedux.js';
import { getAllSlides } from '../../../redux/slidesRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
  slides: getAllSlides(state),
  hotDeals: getHotDeal(state),
});

/*
const mapDispatchToProps = dispatch => ({
   
});
*/

//mapDispatchToProps

export default connect(mapStateToProps)(FeaturedProducts);
