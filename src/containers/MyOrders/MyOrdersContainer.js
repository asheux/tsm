import { connect } from "react-redux";
import MyOrders from "./MyOrders";
import myordersActions from "../../redux/actionCreators/myorders";

const mapStateToProps = ({ myorders }) => ({
    myordersdata: myorders
});

export default connect(mapStateToProps, { myordersActions })(MyOrders);
