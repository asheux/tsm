import React, { Component } from 'react';
import ShowSingleItem from '../../components/ShowSingleItem';
import Navbar from '../../components/Navbar';

class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          menuItems={[]}
        />
        <ShowSingleItem />
      </React.Fragment>
    )
  }
}

export default SingleItem;
