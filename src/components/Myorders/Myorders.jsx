import React from "react";

const Myorders = ({ ...props }) => {
    const { myordersdata } = props;
    const { data } = myordersdata;
    const status = { "0": "Not Paid", "2": "Paid" };

    return (
        <div className="container orders">
            <h4 className="cart-header">My Orders</h4>
            <table id="cart" className="table table-hover table-condensed">
                <thead>
                    <tr>
                        <th className="prodi">Order Id</th>
                        <th className="pesai">Shipped On</th>
                        <th className="quantityi">Name</th>
                        <th className="subti">Status</th>
                        <th className="pesai">Total Amount</th>
                    </tr>
                </thead>
                {data.map(order => (
                    <tbody key={order.order_id}>
                        <tr>
                            <td data-th="order_id">{order.order_id}</td>
                            <td data-th="shipped_on">{order.shipped_on}</td>
                            <td data-th="name">{order.name}</td>
                            <td data-th="status">{status[order.status]}</td>
                            <td data-th="Subtotal">{order.total_amount}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default Myorders;
