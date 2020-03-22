import { connect } from 'react-redux';

import BoxStars from './BoxStars';

//import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, addRating } from '../../../redux/productsRedux.js';

const mapStateToProps = (state, props) => ({
  products: getNew(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addRating: number =>
    dispatch(
      addRating({
        number,
        productId: props.id,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxStars);
