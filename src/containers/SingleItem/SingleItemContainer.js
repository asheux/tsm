import { connect } from 'react-redux';
import singleProductActions from '../../redux/actionCreators/singleProduct';
import reviewsActions from '../../redux/actionCreators/reviews';
import attributesActions from '../../redux/actionCreators/attributes';
import generateActions from '../../redux/actionCreators/generateUniqueCartId';
import addtocartActions from '../../redux/actionCreators/addtocart';
import SingleItem from './SingleItem';

const mapStateToProps = ({
  singleProduct,
  reviews,
  attributes,
  generate,
  shoppingcart
}) => ({
  singleProduct: singleProduct,
  productReviews: reviews,
  productAttributes: attributes,
  generateduniqueId: generate,
  inShoppingcart: shoppingcart
});

export default connect(
  mapStateToProps,
  {
    singleProductActions,
    reviewsActions,
    attributesActions,
    generateActions,
    addtocartActions
  }
)(SingleItem);
