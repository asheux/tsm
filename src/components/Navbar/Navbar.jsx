import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

const Navbar = ({ ...props }) => {
    const {
        activeItem,
        handleItemClick,
        menuItems,
        handleSearchChange,
        handleClick
    } = props;
    const itemStyle = { color: "rgb(244, 93, 34)" };
    return (
        <div className="">
            <Header {...props} />
            <nav className="navbar fixed-top navbar-expand-lg navStyle">
                <div className="container">
                    <Link
                        className="navbar-brand js-scroll-trigger"
                        to="/products"
                    >
                        Mindpload
                    </Link>
                    <div
                        className="collapse navbar-collapse "
                        id="collapsibleNavbar"
                    >
                        <ul className="navbar-nav m-auto ">
                            <li
                                key="0"
                                data-toggle="tooltip"
                                title="All products"
                                className="nav-item"
                            >
                                <Link
                                    to="/products"
                                    data-key="0"
                                    className="link-item"
                                    style={
                                        activeItem === "All products"
                                            ? itemStyle
                                            : {}
                                    }
                                    onClick={handleClick}
                                >
                                    All products
                                </Link>
                            </li>
                            {menuItems.map(menuItem => (
                                <li
                                    key={menuItem.department_id}
                                    data-toggle="tooltip"
                                    title={menuItem.description}
                                    className="nav-item"
                                >
                                    <Link
                                        to={`/products/inDepartment/${menuItem.department_id}`}
                                        data-key={menuItem.department_id}
                                        className="link-item"
                                        style={
                                            activeItem === menuItem.name
                                                ? itemStyle
                                                : {}
                                        }
                                        onClick={handleItemClick}
                                    >
                                        {menuItem.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarResponsive"
                    >
                        <ul className="navbar-nav ml-auto">
                            <div className="searchbar">
                                <input
                                    onChange={handleSearchChange}
                                    className="search_input"
                                    type="text"
                                    name=""
                                    placeholder="Search..."
                                />
                                <i className="fas fa-search"></i>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
