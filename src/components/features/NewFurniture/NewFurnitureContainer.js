import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, addFavorite } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  addFav: number => dispatch(addFavorite(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
