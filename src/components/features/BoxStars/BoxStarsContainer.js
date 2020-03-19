import { connect } from 'react-redux';

import BoxStars from './BoxStars';
import { getAll } from '../../../redux/ProductsRedux';

const mapStateToProps = state => ({
  //stars: state.stars,
  
  products: getAll(state),
  rating: state.products.rating,
});


const mapDispatchToProps = (dispatch, props) => ({
  addRating: rating => dispatch(addRating({
    prodId: props.id,
    rating,
  })),
});


export default connect(mapStateToProps, mapDispatchToProps)(BoxStars);