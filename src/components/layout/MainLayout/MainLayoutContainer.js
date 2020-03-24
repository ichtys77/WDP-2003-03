import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getView, addViewport } from '../../../redux/viewportRedux';

const mapStateToProps = state => ({
  viewport: getView(state),
});

const mapDispatchToProps = dispatch => ({
  addViewport: mode => dispatch(addViewport(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
