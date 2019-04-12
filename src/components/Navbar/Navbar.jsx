import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

const Navbar = ({...props}) => {
  const { activeItem, handleItemClick, menuItems } = props;
  const itemStyle = { color: '#DC143C'};
  return (
    <div className="">
        <Header/>
        <nav className="navbar navbar-fixed-top navbar-expand-lg navStyle">
            <div className="container">
                <Link className="navbar-brand js-scroll-trigger" to="/">Shopmate</Link>
                <div className="collapse navbar-collapse " id="collapsibleNavbar">
                    <ul className="navbar-nav m-auto ">
                        {menuItems.map(menuItem =>
                            <li key={menuItem.department_id} className="nav-item">
                                <Link
                                    to="#"
                                    className='link-item'
                                    style={activeItem === menuItem.name ? itemStyle : {}}
                                    onClick={handleItemClick}
                                >{menuItem.name}</Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <div className="searchbar">
                            <input className="search_input" type="text" name="" placeholder="Search..." />
                            <a href="!#" className="search_icon"><i className="fas fa-search"></i></a>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}
export default Navbar;
