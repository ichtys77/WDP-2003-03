import { connect } from 'react-redux';

import BoxStars from './BoxStars';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, addRating } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  //stars: state.stars,
  
  //categories: getAll(state),
  products: getNew(state),

  rating: state.products.rating,
  
});



const mapDispatchToProps = (dispatch) => ({
  addRating: id => dispatch(addRating(id)),

  getOpinion: (product, stars) => dispatch(updateOpinion(product, stars)),
    
});


export default connect(mapStateToProps, mapDispatchToProps)(BoxStars);