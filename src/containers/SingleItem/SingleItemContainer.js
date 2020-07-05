import { connect } from "react-redux";
import singleProductActions from "../../redux/actionCreators/singleProduct";
import reviewsActions from "../../redux/actionCreators/reviews";
import attributesActions from "../../redux/actionCreators/attributes";
import addtocartActions from "../../redux/actionCreators/addtocart";
import SingleItem from "./SingleItem";

/**
 * map state to props or updates the
 * component with infomation from the store
 * using the action creators
 *  @param {*} object
 */
const mapStateToProps = ({
    singleProduct,
    reviews,
    attributes,
    shoppingcart
}) => ({
    singleProduct: singleProduct,
    productReviews: reviews,
    productAttributes: attributes,
    inShoppingcart: shoppingcart
});

export default connect(mapStateToProps, {
    singleProductActions,
    reviewsActions,
    attributesActions,
    addtocartActions
})(SingleItem);
