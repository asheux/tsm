import { connect } from 'react-redux';
import Order from './SingleOrder';
import singleOrderActions from '../../redux/actionCreators/getOrder';

const mapStateToProps = ({getOrder}) => ({
  singleorderdata: getOrder
});

export default connect(
  mapStateToProps,
  {singleOrderActions}
)(Order);
