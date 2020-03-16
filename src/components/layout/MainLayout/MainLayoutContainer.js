import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getView } from '../../../redux/viewportRedux';

const mapStateToProps = state => ({
  viewport: getView(state),
});

export default connect(mapStateToProps)(MainLayout);
