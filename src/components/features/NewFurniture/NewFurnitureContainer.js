import { connect } from 'react-redux';
import NewFurniture from './NewFurniture';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getView } from '../../../redux/viewportRedux';
import { getNew, changeCompare, addFavorite } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  viewport: getView(state),
});

const mapDispatchToProps = dispatch => ({
  changeCompare: index => dispatch(changeCompare(index)),
  addFav: number => dispatch(addFavorite(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
