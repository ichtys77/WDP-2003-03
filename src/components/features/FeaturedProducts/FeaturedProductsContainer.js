import { connect } from 'react-redux';

import FeaturedProducts from './FeaturedProducts';

import { getAll} from '../../../redux/productsRedux.js';


const mapStateToProps = state => ({

  products: getAll(state),
});


/*
const mapDispatchToProps = dispatch => ({
   
});
*/

//mapDispatchToProps

export default connect(mapStateToProps)(FeaturedProducts);