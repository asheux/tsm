import { connect } from 'react-redux';
import SignUp from './SignUp';
import signupActions from '../../redux/actionCreators/signup';

const mapStateToProps = ({signup}) => ({
  registerUser: signup
});

export default connect(
  mapStateToProps,
  {signupActions}
)(SignUp);
