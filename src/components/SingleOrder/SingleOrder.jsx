import React from "react";
import { Link } from "react-router-dom";

const SingleOrder = ({ ...props }) => {
    const { singleorderdata } = props;
    const ordersData = singleorderdata.data;

    return (
        <div className="container">
            <h4 className="cart-header">{`${ordersData.length} item(s) in your order`}</h4>
            {ordersData.length !== 0 ? (
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th className="order_id">Order ID</th>
                            <th className="pro_id">Product Id</th>
                            <th className="pesad">Attributes</th>
                            <th className="quantityd">Product Name</th>
                            <th className="ubt">Quantity</th>
                            <th className="susbt">Unit Cost</th>
                            <th className="susbt">Subtotal</th>
                        </tr>
                    </thead>
                    {ordersData.map(item => (
                        <tbody key={item.order_id}>
                            <tr>
                                <td>{item.order_id}</td>
                                <td>{item.product_id}</td>
                                <td data-th="attributes">
                                    <p>{`Size: ${
                                        item.attributes.split(",")[0]
                                    }`}</p>
                                    <p>{`Color: ${
                                        item.attributes.split(",")[1]
                                    }`}</p>
                                </td>
                                <td>
                                    <h4 className="nomargin">
                                        {item.product_name}
                                    </h4>
                                </td>
                                <td data-th="Price">{item.quantity}</td>
                                <td>{item.unit_cost}</td>
                                <td data-th="Subtotal" className="text-center">
                                    {item.subtotal}
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            ) : (
                <div>
                    <h6>No order has been placed</h6>
                    <Link className="btn btn-danger" to="/">
                        {" "}
                        Go back to shop
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SingleOrder;
