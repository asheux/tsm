import React, { Component } from "react";
import SingleOrder from "../../components/SingleOrder";
import Navbar from "../../components/Navbar";

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { singleOrderActions, match } = this.props;
        const orderId = match.params.order_id;
        singleOrderActions(orderId);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar {...this.props} menuItems={[]} />
                <SingleOrder {...this.props} />
            </React.Fragment>
        );
    }
}

export default Order;
