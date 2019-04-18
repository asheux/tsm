import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import shoppingcartActions from '../../redux/actionCreators/shoppingcart';
import totalAmountActions from '../../redux/actionCreators/totalAmount';
import updateItemActions from '../../redux/actionCreators/updateitem';
import deleteItemActions from '../../redux/actionCreators/deleteitem';

/**
 * map state to props or updates the
 * component with infomation from the store
 * using the action creators
 *  @param {*} object
 */
const mapStateToProps = ({
  shoppingcartData,
  totalAmount,
  updateitem,
  deleteitem
}) => ({
  cartData: shoppingcartData,
  shoppingCartTotal: totalAmount,
  updatedData: updateitem,
  deleteCart: deleteitem
});

export default connect(
  mapStateToProps,
  {
    shoppingcartActions,
    totalAmountActions,
    updateItemActions,
    deleteItemActions
  }
)(ShoppingCart);
