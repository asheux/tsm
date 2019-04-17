import React, { Component } from 'react';
import ShoppingCartTable from '../../components/ShoppingCartTable';
import Navbar from '../../components/Navbar';
import equal from 'fast-deep-equal'

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this)
  };

  componentDidMount() {
    this.updateShoppingCart();
  };


  componentDidUpdate(nextProps) {
    if(!equal(this.props.shoppingCartTotal.data.total_amount,
      nextProps.shoppingCartTotal.data.total_amount
    )) {
      this.updateShoppingCart();
    }
  }


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

  handleChange = (e) => {
    const value = e.target.value;
    const itemId = e.target.getAttribute('data-key');
    const payload = {
      quantity: value
    };
    const { updateItemActions, totalAmountActions } = this.props;
    updateItemActions(itemId, payload)
    this.updateShoppingCart();
  }

  handleDelete = (e) => {
    e.preventDefault();
    const { match } = this.props;
    const cartId = match.params.cartId;
  }

  render() {
    return (
      <React.Fragment>
        <Navbar {...this.props} menuItems={[]}/>
        <ShoppingCartTable
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
          {...this.props}
        />
      </React.Fragment>
    )
  }
}

export default ShoppingCart;
