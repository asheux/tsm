import React, { Component } from 'react';
import FilterProducts from '../../components/FilterProducts';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
// import * as accessCart from '../../utils/cart';
import Footer from '../../components/Footer';

class Products extends Component {
  /**
   * Creates the ShoppingCart Component and initializes state
   * @constructor
   * @param {*} props - Super props inherited by Component
   */
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

  /**
   * Ensures that the component that updates the cart in mounted
   * Lifecycle implementation
   */
  componentDidMount() {
    const {
      productsActions,
      departmentsActions,
      generateActions,
      categoriesActions } = this.props;
    generateActions();
    departmentsActions().then(data => {
      if(data.data) {
        this.setState({departments: data.data});
      }
    });
    categoriesActions().then(data => {
      if(data.data) {
        this.setState({categories: data.data.rows})
      }
    });
    productsActions().then(data => {
      if(data.data) {
        this.setState({
          products: data.data.rows
        });
      }
    })
  }

  /**
   * Listens to an onClick event on a data-key attributes on a card
   * that has details of a product
   * if event then redirects to the next page
   *  @param {*} event
   */
  handleCardClick = (e) => {
    const productId = e.target.getAttribute('data-key');
    const { history } = this.props;
    history.push(`/products/${productId}`);
  }

  /**
   * maps through an array and formats the data
   * then returns the formated data
   *  @param {*} array
   */
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

  /**
   * Listens to an onClick event on a data-key attributes
   * in the current document
   * that has details of a product
   * if event then redirects to the next page
   *  @param {*} event
   */
  handleClick = (e) => {
    const value = e.target.innerHTML;
    const { productsData, categoriesData, departmentData  } = this.props;
    this.setState({
      products: productsData.data.rows,
      departments: departmentData.data,
      categories: categoriesData.data.rows,
      activeItem: value
    });
  }

  /**
   * Listens to an onClick event on a data-key attributes
   * in the current document on categories
   * that has details of a product
   * if event then redirects to the next page
   *  @param {*} event
   */
  handleCategoryClick = (e) => {
    const categoryId = e.target.getAttribute('data-key');
    const { productsByCategoryActions } = this.props;
    productsByCategoryActions(categoryId).then(data => {
      if(data.data) {
        this.setState({products: data.data.rows});
      }
    })
  }

  /**
   * Listens to an onClick event on a data-key attributes
   * in the current document departments
   * that has details of a product
   * if event then redirects to the next page
   *  @param {*} event
   */
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
        <Footer />
      </React.Fragment>
    )
  }
}

export default Products;
