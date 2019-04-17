import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../static/images-shirt2.png';

const ShoppingCartTable = ({...props}) => {
  const {
    handleChange,
    cartData,
    handleDelete,
    shoppingCartTotal } = props;
  const shoppingCartData = cartData.data;
  const totalAmount = shoppingCartTotal.data;
  return (
      <div className="container">
        <h4 className="cart-header">{`${shoppingCartData.length} item(s) in your cart`}</h4>
        {shoppingCartData.length !== 0 ?
        <table id="cart" className="table table-hover table-condensed">
         <thead>
          <tr>
            <th className="prod" >Product</th>
            <th className="pesa" >Price</th>
            <th className="quantity" >Quantity</th>
  					<th className="text-center subt">Subtotal</th>
  					<th className="pesa" ></th>
  				</tr>
  			</thead>
  			{shoppingCartData.map(cartData =>
          <tbody key={cartData.item_id}>
    				<tr>
    					<td data-th="Product">
    						<div className="row">
    							<div className="col-sm-3 hidden-xs"><img src={image} alt="avatar" className="img-responsive"/></div>
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
                  value={cartData.quantity} className="form-control" >
            			<option value="1">1</option>
            			<option value="2">2</option>
            			<option value="3">3</option>
            			<option value="4">4</option>
                  <option value="5">5</option>
            			<option value="6">6</option>
            		</select>
            	</td>
    					<td data-th="Subtotal" className="text-center">&euro; {cartData.subtotal}</td>
    					<td className="actions" data-th="">
    						<div onClick={handleDelete} className="cart-btn delete"><i className="fas fa-trash-alt"></i></div>
    					</td>
    				</tr>
    			</tbody>
        )}
  			<tfoot>
  				<tr>
  					<td><Link to="/" className="btn btn-default"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
  					<td colSpan="2" className="hidden-xs"></td>
  					<td className="hidden-xs text-center"><strong>Total &euro;{totalAmount.total_amount}</strong></td>
  					<td><a href="https://www.paypal.com/webapps/shoppingcart?mfid=1546373779156_cb91e3a2b2dc7&flowlogging_id=cb91e3a2b2dc7#/checkout/shoppingCart" className="btn btn-success"> Checkout <i className="fa fa-angle-right"></i></a></td>
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
