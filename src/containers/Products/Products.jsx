import React, { Component } from 'react';
import FilterProducts from '../../components/FilterProducts';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  };

  componentDidMount() {
    const { productsActions } = this.props;
    productsActions().then(data => {
      if(data.data) {
        this.setState({products: data.data.rows});
      }
    })
  }

  handleCardClick = () => {
    console.log('Fuck it!! im here');
  }

  mapDisplayCardDetails = (productsArray) => {
    const displayProductList = [];
    productsArray.map(product => {
      const detailsList = {
          id: product.product_id,
          title: product.name,
          price: product.price,
          description: product.description
        };
      return displayProductList.push(detailsList)
    })
    return displayProductList;
  }

  render() {
    const { products } = this.state;
    return (
      <FilterProducts
        itemDetails={this.mapDisplayCardDetails(products)}
        handleCardClick={this.handleCardClick}
      />
    )
  }
}

export default Products;
