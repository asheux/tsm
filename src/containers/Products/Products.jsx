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
      activeItem: 'All products',
      sidebarActive: '',
      total: '',
      pageTotal: 1
    };
    this.handleDepartmentClick = this.handleDepartmentClick.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleShowSizeChange = this.handleShowSizeChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
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
      metaData,
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
          products: data.data.data.rows,
          total: data.data.meta.total,
          pageTotal: Math.ceil(
            data.data.meta.total / metaData.pageSize
          )
        });
      }
    });
  }

  mapCategories = (sidebarActive, total, pageSize) => {
    const categoryId = localStorage.getItem('categoryId');
    const { productsByCategoryActions } = this.props;
    const { pageTotal } = this.state;

    switch(sidebarActive) {
      case 'French':
      case 'Italian':
      case 'Irish':
      case 'Animal':
      case 'Flower':
      case 'Christmas':
      case "Valentine's":
        productsByCategoryActions(categoryId)
          .then(data => {
            this.setState({
              products: data.data.data.rows,
              pageTotal: (total && pageSize) ? Math.ceil(total / pageSize) : pageTotal
            }, () => {this.scrollPage()});
          });
        break;
      default:
        return '';
    }
  }

  scrollPage = () => window.scrollTo(0,0);

  /**
   * handles changes that happen on size of the page or the page limit
   * and updates the relevant items the should be displayed
   *  @param {*} event
   */
  handleShowSizeChange = (_, pageSize) => {
    const {
      $pageSize,
      productsByDepartmentActions,
      productsActions
    } = this.props;
    const { total, activeItem, sidebarActive } = this.state;
    const deparmentId = localStorage.getItem('deparmentId');
    $pageSize(pageSize);

    switch(activeItem) {
      case 'All products':
        productsActions().then(data => {
          this.setState({
            products: data.data.data.rows,
            pageTotal: Math.ceil(total / pageSize)
          }, () => {this.scrollPage()});
        });
        this.mapCategories(sidebarActive, total, pageSize);
        break;
      case 'Regional':
      case 'Nature':
      case 'Seasonal':
        productsByDepartmentActions(deparmentId)
          .then(data => {
            this.setState({
              products: data.data.data.rows,
              pageTotal: Math.ceil(total / pageSize)
            }, () => {this.scrollPage()});
          });
        this.mapCategories(sidebarActive, total, pageSize);
        break;
      default:
        return '';
    }
  }

  /**
   * handles changes that happen on number of the page
   * and updates the relevant items the should be displayed
   *  @param {*} event
   */
  handlePageChange = (pageNumber) => {
    const {
      $page,
      productsActions,
      productsByDepartmentActions
    } = this.props;
    const { pageTotal, activeItem, sidebarActive } = this.state;
    const deparmentId = localStorage.getItem('deparmentId');
    $page(pageNumber, pageTotal);

    switch(activeItem) {
      case 'All products':
        productsActions().then(data => {
          this.setState({
            products: data.data.data.rows
          }, () => {this.scrollPage()});
        });
        this.mapCategories(sidebarActive);
        break;
      case 'Regional':
      case 'Nature':
      case 'Seasonal':
        productsByDepartmentActions(deparmentId)
          .then(data => {
            this.setState({
              products: data.data.data.rows
            }, () => {this.scrollPage()});
        });
        this.mapCategories(sidebarActive);
        break;
      default:
        return '';
    }
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

  switchTotal = () => {
    const { activeItem, total } = this.state;
    const { productsData } = this.props;

    switch(activeItem) {
      case activeItem:
        return productsData.data.count;
        break;
      case 'Regional':
      case 'Nature':
      case 'Seasonal':
        return total;
        break;
      default:
        return total;
    }
  }

  isLessThanTotal = (element, index, array) => {
    const { total } = this.state;
    return element <= (total + 10);
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
      total: this.switchTotal(),
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
    const value = e.target.innerHTML;
    localStorage.setItem('categoryId', categoryId);
    const { productsByCategoryActions, metaCategories } = this.props;

    productsByCategoryActions(categoryId).then(data => {
      if(data.data) {
        this.setState({
          products: data.data.data.rows,
          total: data.data.meta.total,
          sidebarActive: value,
          pageTotal: Math.ceil(
            data.data.meta.total / metaCategories.pageSize
          )
        });
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
      localStorage.setItem('deparmentId', departmentId);
      const {
        productsByDepartmentActions,
        metaDepartments,
        categoriesByDepartmentActions
      } = this.props;

      productsByDepartmentActions(departmentId).then(data => {
        if(data.data) {
          this.setState({
            products: data.data.data.rows,
            activeItem: value,
            total: data.data.meta.total,
            pageTotal: Math.ceil(
              data.data.meta.total / metaDepartments.pageSize
            )
          });
        }
      });
      categoriesByDepartmentActions(departmentId).then(data => {
        if(data.data) {
          this.setState({categories: data.data})
        }
      });
  };

  /**
   * Listens to events and changes in form inputs
   *  @param {*} event
   */
  handleSearchChange = (e) => {
    const { value } = e.target;
    localStorage.setItem('searchQuery', value);
    const { searchActions, metaSearch } = this.props;
    searchActions(value).then(data => {
      this.setState({
        products: data.data.data.rows,
        total: data.data.meta.total,
        pageTotal: Math.ceil(
          data.data.meta.total / (!metaSearch ? '' : metaSearch.pageSize)
        )
      });
    });
  }

  render() {
    const {
      products,
      activeItem,
      categories,
      total,
      sidebarActive,
      departments } = this.state
    const {
      categoriesData,
      metaData,
      departmentData } = this.props;

    const options = metaData.pageSizeOptions.filter(this.isLessThanTotal);

    return (
      <React.Fragment>
        <Navbar
          {...this.props}
          handleClick={this.handleClick}
          menuItems={departments.length === 0 ? departmentData.data : departments}
          handleItemClick={this.handleDepartmentClick}
          activeItem={activeItem}
          handleSearchChange={this.handleSearchChange}
        />
        <div className="container-fluid">
          <div className="row">
            <Sidebar
              {...this.props}
              sidebarActive={sidebarActive}
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
              handlePageChange={this.handlePageChange}
              handleShowSizeChange={this.handleShowSizeChange}
              pageSizeOptions={options}
              total={parseInt(total, 10)}
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Products;
