import React, { Component } from 'react';
import ShowSingleItem from '../../components/ShowSingleItem';
import Navbar from '../../components/Navbar';

class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeAttributes: [],
      colorAttributes: [],
      activeSizeItem: '',
      activeColorItem: '',
      error: '',
    };
  };

  componentDidMount() {
    const {
      match,
      singleProductActions,
      reviewsActions,
      attributesActions
    } = this.props;
    const productId = match.params.id;
    singleProductActions(productId);
    reviewsActions(productId);
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

  handleSizeClick = (e) => {
    const value = e.target.innerHTML;
    this.setState({activeSizeItem: value});
  }

  handleColorClick = (e) => {
    const value = e.target.getAttribute('data-key');
    this.setState({activeColorItem: value});
  }

  handleAddToCart = (e) => {
    e.preventDefault();
    const { match,
      addtocartActions,
      history,
      generateActions
    } = this.props;
    const productId = match.params.id;
    const { activeSizeItem, activeColorItem } = this.state;
    const itemAttributes = `${activeSizeItem}, ${activeColorItem}`;
    generateActions().then(data => {
      const generatedId = data.data.cart_id;
      const payload = {
        cart_id: generatedId,
        product_id: productId,
        attributes: itemAttributes
      };
      addtocartActions(payload).then(data => {
        if (data.data) {
          history.push(`/shoppingcart/${generatedId}`);
        }
        else {
          this.setState({
            error: 'please provide more description on the color and size!'
          });
        }
      });
    });
  }

  render() {
    const { singleProduct, productReviews, inShoppingcart } = this.props;
    const { loading } = inShoppingcart;
    const { error } = this.state;
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
          menuItems={[]}
        />
        <ShowSingleItem
          {...this.props}
          error={error}
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
