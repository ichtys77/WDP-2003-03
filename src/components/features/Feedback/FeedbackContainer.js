import { connect } from 'react-redux';
import Feedback from './Feedback';
import { getAllFeedback } from '../../../redux/feedbackRedux';

const mapStateToProps = state => ({
  feedback: getAllFeedback(state),
});

export default connect(mapStateToProps)(Feedback);
