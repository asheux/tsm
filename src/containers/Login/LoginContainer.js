import { connect } from 'react-redux';
import Login from './Login';
import loginActions from '../../redux/actionCreators/login';

/**
 * map state to props or updates the
 * component with infomation from the store
 * using the action creators
 *  @param {*} object
 */
const mapStateToProps = ({login}) => ({
  loginUser: login
});

export default connect(
  mapStateToProps,
  {loginActions}
)(Login);
