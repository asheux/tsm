import React, { Component } from 'react';
import ProductsContainer from '../Products';
import Footer from '../../components/Footer';

class Dashboard extends Component {
  constructor(props) {
      super(props);
      this.state = {
        departments: []
      };
  };

  componentDidMount() {
    const { departmentsActions, categoriesActions } = this.props;
    departmentsActions().then(data => {
      if(data.data) {
        this.setState({departments: data.data});
      }
    });
    categoriesActions();
  }

  render() {
      return (
        <React.Fragment>
            <ProductsContainer {...this.props}/>
            <Footer />
        </React.Fragment>
      )
  }
}

export default Dashboard;
