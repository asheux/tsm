import React, { Component } from 'react';
import ShowSingleItem from '../../components/ShowSingleItem';
import Navbar from '../../components/Navbar';

class SingleItem extends Component {
  /**
   * Creates the ShoppingCart Component and initializes state
   * @constructor
   * @param {*} props - Super props inherited by Component
   */
  constructor(props) {
    super(props);
    this.state = {
      sizeAttributes: [],
      colorAttributes: [],
      activeSizeItem: '',
      activeColorItem: '',
      error: '',
      message: '',
      cartId: ''
    };
  };

  /**
   * Ensures that the component that updates the cart in mounted
   * Lifecycle implementation
   */
  componentDidMount() {
    const {
      match,
      singleProductActions,
      reviewsActions,
      attributesActions,
      generateActions
    } = this.props;
    const productId = match.params.id;
    singleProductActions(productId);
    reviewsActions(productId);
    generateActions();
    attributesActions(productId).then(data => {
      if(data.data) {
         const attributes = data.data;
         let sizeAttr = [];
         let colorAttr = [];
         attributes.map(attribute => {
           if (attribute.attribute_name === 'Size') {
             sizeAttr.push(attribute);
           }
           if (attribute.attribute_name === 'Color') {
             colorAttr.push(attribute)
           }
           return '';
         });
         this.setState({
           sizeAttributes: sizeAttr,
           colorAttributes: colorAttr
         });
      }
    });
  }

  /**
   * Listens to an onClick event on a data-key attributes
   * then updates the attribute selected (size)
   * if event then redirects to the next page
   *  @param {*} event
   */
  handleSizeClick = (e) => {
    const value = e.target.innerHTML;
    this.setState({activeSizeItem: value});
  }

  /**
   * Listens to an onClick event on a data-key attributes
   * then updates the attribute selected (size)
   * if event then redirects to the next page
   *  @param {*} event
   */
  handleColorClick = (e) => {
    const value = e.target.getAttribute('data-key');
    this.setState({activeColorItem: value});
  }

  /**
   * Listens to an onClick event on a data-key attributes
   * Adds item to cart in the data server
   *  @param {*} event
   */
  handleAddToCart = (e) => {
    e.preventDefault();
    const { match,
      addtocartActions,
      generateduniqueId
    } = this.props;

    const productId = match.params.id;
    const { activeSizeItem, activeColorItem } = this.state;
    const itemAttributes = `${activeSizeItem}, ${activeColorItem}`;
    const generatedId = generateduniqueId.data.cart_id;
    const payload = {
      cart_id: generatedId,
      product_id: productId,
      attributes: itemAttributes
    };
    addtocartActions(payload).then(data => {
      if (data.data) {
        this.setState({
          message: 'Added to to cart successfully',
          cartId: generatedId
        });
      }
      else {
        this.setState({
          error: 'please provide more description on the color and size!'
        });
      }
    });
  }

  render() {
    const { singleProduct, productReviews, inShoppingcart } = this.props;
    const { loading, data } = inShoppingcart;
    const { error, message, cartId } = this.state;
    const {
      sizeAttributes,
      colorAttributes,
      activeSizeItem,
      activeColorItem
    } = this.state;
    return (
      <React.Fragment>
        <Navbar
          {...this.props}
          generatedId={cartId}
          menuItems={[]}
          shoppingCart={data}
        />
        <ShowSingleItem
          {...this.props}
          error={error}
          message={message}
          loading={loading}
          activeSizeItem={activeSizeItem}
          handleAddToCart={this.handleAddToCart}
          activeColorItem={activeColorItem}
          handleColorClick={this.handleColorClick}
          handleSizeClick={this.handleSizeClick}
          sizeAttributes={sizeAttributes}
          colorAttributes={colorAttributes}
          reviews={productReviews.data}
          productDetails={singleProduct.data}
        />
      </React.Fragment>
    )
  }
}

export default SingleItem;
