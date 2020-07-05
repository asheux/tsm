import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCartTable = ({...props}) => {
    const {
        handleChange,
        cartData,
        handleRemove,
        handleDelete, totalItemInCart,
        shoppingCartTotal } = props;
    const shoppingCartData = cartData.data;
    console.log(totalItemInCart)
    const totalAmount = shoppingCartTotal.data;
    return (
        <div className="container shopping-cart-table">
            <h4 className="cart-header">{`${totalItemInCart} item(s) in your cart`}</h4>
            {totalItemInCart !== 0 ?
                    <table id="cart" className="table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th className="prod" >Product</th>
                                <th className="pesa" >Price</th>
                                <th className="quantity" >Quantity</th>
                                <th className="text-center subt">Subtotal</th>
                            </tr>
                        </thead>
                        {shoppingCartData.map(cartData =>
                            <tbody key={cartData.item_id}>
                                <tr>
                                    <td data-th="Product">
                                        <div className="row">
                                            <div className="col-sm-3 hidden-xs remove">
                                                <i data-key={cartData.item_id}
                                                    onClick={handleRemove}
                                                    className="fas cart-trash fa-trash-alt">
                                                </i>
                                            </div>
                                            <div className="col-sm-9">
                                                <h4 className="nomargin">{cartData.name}</h4>
                                                <p>{`Size: ${cartData.attributes.split(',')[0]}`}</p>
                                                <p>{`Color: ${cartData.attributes.split(',')[1]}`}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-th="Price">&euro; {cartData.price}</td>
                                    <td>
                                        <select onChange={handleChange}
                                            data-key={cartData.item_id}
                                            value={cartData.quantity}
                                            className="form-control" >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </td>
                                    <td data-th="Subtotal" className="text-center">&euro; {cartData.subtotal}</td>
                                </tr>
                            </tbody>
                        )}
                        <tfoot>
                            <tr>
                                <td><Link to="/" className="add-to-cart back-btn btn btn-default"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                                <td className="actions" data-th="">
                                    <Link onClick={handleDelete} to="" className="add-to-cart btn btn-success"><i className="fas fa-trash-alt"></i> Empty</Link>
                                </td>
                                <td className="hidden-xs text-center"><strong>Total &euro;{totalAmount.total_amount}</strong></td>
                                <td><Link to={`/stripe/charge`} className="add-to-cart btn btn-success"> Checkout <i className="fa fa-angle-right"></i></Link></td>
                            </tr>
                        </tfoot>
                    </table>
                    : <div>
                        <h6>Nothing in the shopping cart yet</h6>
                        <Link className="btn btn-danger" to="/"> Go back to shop</Link>
                    </div>}
                </div>
    );
}

export default ShoppingCartTable;
