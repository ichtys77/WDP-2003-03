import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, changeCompare, addFavorite } from '../../../redux/productsRedux.js';
import { getAllFeedback } from '../../../redux/feedbackRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  feedback: getAllFeedback(state),
});

const mapDispatchToProps = dispatch => ({
  changeCompare: index => dispatch(changeCompare(index)),
  addFav: number => dispatch(addFavorite(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
