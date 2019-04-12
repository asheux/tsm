import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import ProductsContainer from '../Products';

class Dashboard extends Component {
  constructor(props) {
      super(props);
      this.state = {
        departments: [],
        categories: [],
        activeItem: 'Regional'
      };
      this.handleItemClick = this.handleItemClick.bind(this);
  };

  componentDidMount() {
    const { departmentsActions, categoriesActions } = this.props;
    departmentsActions().then(data => {
      if(data.data) {
        this.setState({departments: data.data});
      }
    });
    categoriesActions().then(data => {
      if(data.data) {
        this.setState({categories: data.data.rows});
      }
    });
  }

  handleItemClick = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;
      this.setState({activeItem: value});
  };

  render() {
      const { activeItem, departments, categories } = this.state;
      return (
        <React.Fragment>
        <Navbar
          menuItems={departments}
          handleItemClick={this.handleItemClick}
          activeItem={activeItem}
        />
        <div className="container-fluid">
          <div className="row">
            <Sidebar
              menu={categories}
            />
            <ProductsContainer />
          </div>
        </div>
        </React.Fragment>
      )
  }
}

export default Dashboard;
