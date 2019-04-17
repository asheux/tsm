import React, { Component } from 'react';
import FilterProducts from '../../components/FilterProducts';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      departments: [],
      categories: [],
      activeItem: 'All products'
    };
    this.handleDepartmentClick = this.handleDepartmentClick.bind(this);
  };

  componentDidMount() {
    const { productsActions, categoriesData, departmentData  } = this.props;
    productsActions().then(data => {
      if(data.data) {
        this.setState({
          products: data.data.rows,
          departments: departmentData.data,
          categories: categoriesData.data.rows
        });
      }
    })
  }

  handleCardClick = (e) => {
    const productId = e.target.getAttribute('data-key');
    const { history } = this.props;
    history.push(`/products/${productId}`)
  }

  mapDisplayCardDetails = (productsArray) => {
    const displayProductList = [];
    productsArray.map(product => {
      const detailsList = {
          id: product.product_id,
          title: product.name,
          price: product.price,
          description: product.description,
          discountedPrice: product.discounted_price,
          thumbnail: product.thumbnail
        };
      return displayProductList.push(detailsList)
    })
    return displayProductList;
  }

  handleClick = (e) => {
    const value = e.target.innerHTML;
    const { productsActions, categoriesData, departmentData  } = this.props;
    productsActions().then(data => {
      if(data.data) {
        this.setState({
          products: data.data.rows,
          departments: departmentData.data,
          categories: categoriesData.data.rows,
          activeItem: value
        });
      }
    });
  }

  handleCategoryClick = (e) => {
    const categoryId = e.target.getAttribute('data-key');
    const { productsByCategoryActions } = this.props;
    productsByCategoryActions(categoryId).then(data => {
      if(data.data) {
        this.setState({products: data.data.rows});
      }
    })
  }

  handleDepartmentClick = (e) => {
      const value = e.target.innerHTML;
      const departmentId = e.target.getAttribute('data-key');
      const { productsByDepartmentActions, categoriesByDepartmentActions } = this.props;
      productsByDepartmentActions(departmentId).then(data => {
        if(data.data) {
          this.setState({
            products: data.data.rows,
            activeItem: value
          });
        }
      });
      categoriesByDepartmentActions(departmentId).then(data => {
        if(data.data) {
          this.setState({categories: data.data})
        }
      });
  };

  render() {
    const { products, activeItem, categories, departments } = this.state
    const { categoriesData, departmentData } = this.props;
    return (
      <React.Fragment>
        <Navbar
          {...this.props}
          handleClick={this.handleClick}
          menuItems={departments.length === 0 ? departmentData.data : departments}
          handleItemClick={this.handleDepartmentClick}
          activeItem={activeItem}
        />
        <div className="container-fluid">
          <div className="row">
            <Sidebar
              {...this.props}
              menu={!categories
                ?
                (
                  !categoriesData.data.rows
                  ? []
                  : categoriesData.data.rows
                )
                : categories}
              handleSidebarClick={this.handleCategoryClick}
            />
            <FilterProducts
              {...this.props}
              itemDetails={this.mapDisplayCardDetails(products)}
              handleCardClick={this.handleCardClick}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Products;
