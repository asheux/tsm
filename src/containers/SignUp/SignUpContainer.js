import { connect } from 'react-redux';
import SignUp from './SignUp';
import signupActions from '../../redux/actionCreators/signup';

/**
 * map state to props or updates the
 * component with infomation from the store
 * using the action creators
 *  @param {*} object
 */
const mapStateToProps = ({signup}) => ({
  registerUser: signup
});

export default connect(
  mapStateToProps,
  {signupActions}
)(SignUp);
