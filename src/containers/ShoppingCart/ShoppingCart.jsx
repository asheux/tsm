import React, { Component } from 'react';
import ShoppingCartTable from '../../components/ShoppingCartTable';
import Navbar from '../../components/Navbar';
import * as accessCart from '../../utils/cart';

class ShoppingCart extends Component {
    /**
     * Creates the ShoppingCart Component and initializes state
     * @constructor
     * @param {*} props - Super props inherited by Component
     */
    constructor(props) {
        super(props);
        this.state = {
            shoppingCart: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    };

    /**
     * Ensures that the component that updates the cart in mounted
     * Lifecycle implementation
     */
    componentDidMount() {
        this.updateShoppingCart();
    };

    /**
     * Ensures that the changes are made to the component
     * Does real time update of the cart
     */
    updateShoppingCart = () => {
        const {
            shoppingcartActions,
            totalAmountActions
        } = this.props;
        const cartId = accessCart.getGeneratedCartId();
        if (cartId) {
            shoppingcartActions(cartId).then(data => {
                if (data.data) {
                    this.setState({shoppingCart: data.data})
                }
            });
            totalAmountActions(cartId);
        }
    }

    /**
     * This algorithm computes the item in the cart
     *  @param {*} array
     */
    computeTotal = (data) => {
        let total = 0;
        for (let i = 0; i < data.length; i+=1) {
            // eslint-disable-next-line
            Object.keys(data[i]).forEach(item => {
                if(item === 'quantity') {
                    total += data[i][item];
                }
            });
        };
        return total;
    }

    /**
     * Listens to events and changes in form inputs
     *  @param {*} event
     */
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

    /**
     * Listens to an onClick event
     * if event then an item is deleted from cart list
     *  @param {*} event
     */
    handleDelete = (e) => {
        e.preventDefault();
        const { deleteItemActions } = this.props;
        const cartId = accessCart.getGeneratedCartId();
        if (cartId) {
            deleteItemActions(cartId).then(data => {
                this.updateShoppingCart();
            });
        }
    }

    handleRemove = (e) => {
        const { removecartitemActions } = this.props;
        const itemId = e.target.getAttribute('data-key');
        if (itemId) {
            removecartitemActions(itemId).then(data => {
                this.updateShoppingCart();
            });
        }
    }

    render() {
        const { shoppingCart } = this.state;
        const totalItemInCart = this.computeTotal(shoppingCart);

        return (
            <React.Fragment>
                <Navbar
                    {...this.props}
                    menuItems={[]}
                    shoppingCart={shoppingCart}
                />
                <ShoppingCartTable
                    totalItemInCart={totalItemInCart}
                    handleRemove={this.handleRemove}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDelete}
                    {...this.props}
                />
            </React.Fragment>
        )
    }
}

export default ShoppingCart;
