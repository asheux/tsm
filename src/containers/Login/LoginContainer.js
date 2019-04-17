import { connect } from 'react-redux';
import Login from './Login';
import loginActions from '../../redux/actionCreators/login';

const mapStateToProps = ({login}) => ({
  loginUser: login
});

export default connect(
  mapStateToProps,
  {loginActions}
)(Login);
