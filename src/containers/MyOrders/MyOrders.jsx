import React, { Component } from 'react';
import Myorders from '../../components/Myorders';
import Navbar from '../../components/Navbar';

class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { myordersActions } = this.props;
    myordersActions();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          {...this.props}
          menuItems={[]}
        />
        <Myorders {...this.props} />
      </React.Fragment>
    )
  }
}

export default MyOrders;
