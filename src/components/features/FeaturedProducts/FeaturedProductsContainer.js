import { connect } from 'react-redux';

import FeaturedProducts from './FeaturedProducts';

import { getAll } from '../../../redux/productsRedux.js';
import { getAllSlides } from '../../../redux/slidesRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
  slides: getAllSlides(state),
});

/*
const mapDispatchToProps = dispatch => ({
   
});
*/

//mapDispatchToProps

export default connect(mapStateToProps)(FeaturedProducts);
