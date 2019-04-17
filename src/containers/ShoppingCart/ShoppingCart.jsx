import React, { Component } from 'react';
import ShoppingCartTable from '../../components/ShoppingCartTable';
import Navbar from '../../components/Navbar';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this)
  };

  componentDidMount() {
    this.updateShoppingCart();
  };

  updateShoppingCart = () => {
    const {
      match,
      shoppingcartActions,
      totalAmountActions
    } = this.props;
    const cartId = match.params.cartId;
    if (cartId) {
      shoppingcartActions(cartId);
      totalAmountActions(cartId);
    }
  }

  computeTotal = (data) => {
    let total = 0;
    for (let i = 0; i < data.length; i+=1) {
    	Object.keys(data[i]).forEach(item => {
        if(item === 'quantity') {
          total += data[i][item];
        }
      });
    };
    return total;
  }

  handleChange = (e) => {
    const value = e.target.value;
    const itemId = e.target.getAttribute('data-key');
    const payload = {
      quantity: value
    };
    const { updateItemActions } = this.props;
    updateItemActions(itemId, payload).then(data => {
      this.updateShoppingCart();
    })
  }

  handleDelete = (e) => {
    e.preventDefault();
    const { match, deleteItemActions } = this.props;
    const cartId = match.params.cartId;
    if (cartId) {
      deleteItemActions(cartId).then(data => {
        this.updateShoppingCart();
      });
    }
  }

  render() {
    const { cartData } = this.props;
    const shoppingCartData = cartData.data;
    const totalItemInCart = this.computeTotal(shoppingCartData);

    return (
      <React.Fragment>
        <Navbar
          {...this.props}
          menuItems={[]}
          totalItemInCart={totalItemInCart}
        />
        <ShoppingCartTable
          totalItemInCart={totalItemInCart}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
          {...this.props}
        />
      </React.Fragment>
    )
  }
}

export default ShoppingCart;
