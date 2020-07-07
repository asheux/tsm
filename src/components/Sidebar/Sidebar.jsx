import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ ...props }) => {
    const { bstyle, menu, sidebarActive, handleSidebarClick } = props;
    const itemStyle = {
        color: "#DC143C",
        borderBottom: "1px solid #DC143C"
    };

    return (
        <div className="col-md-2">
            <div className="sidebar" style={bstyle}>
                <div className="content-nav">
                    <ul className="nav flex-column">
                        <h4 style={bstyle}>Categories</h4>
                        {menu.map(item => (
                            <li
                                className="nav-item"
                                data-toggle="tooltip"
                                title={item.description}
                                key={item.category_id}
                            >
                                <Link
                                    to={`/products/inCategory/${item.category_id}`}
                                    style={
                                        (sidebarActive === item.name
                                            ? itemStyle
                                            : {},
                                        bstyle)
                                    }
                                    data-key={item.category_id}
                                    onClick={handleSidebarClick}
                                    className="nav-link"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="theme-icon">
                    <div
                        className="icon"
                        data-toggle="tooltip"
                        title="Change Theme"
                        onClick={props.toggler}
                        style={props.btheme}
                    >
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-moon"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
