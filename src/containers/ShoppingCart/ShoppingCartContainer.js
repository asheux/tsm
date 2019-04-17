import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import shoppingcartActions from '../../redux/actionCreators/shoppingcart';
import totalAmountActions from '../../redux/actionCreators/totalAmount';
import updateItemActions from '../../redux/actionCreators/updateitem';

const mapStateToProps = ({
  shoppingcartData,
  totalAmount,
  updateitem
}) => ({
  cartData: shoppingcartData,
  shoppingCartTotal: totalAmount,
  updatedData: updateitem
});

export default connect(
  mapStateToProps,
  {
    shoppingcartActions,
    totalAmountActions,
    updateItemActions
  }
)(ShoppingCart);
