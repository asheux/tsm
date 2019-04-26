import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({...props}) => {
  const {
    menu,
    sidebarActive,
    handleSidebarClick } = props;
  const itemStyle = {
    color: '#DC143C',
    borderBottom: '1px solid #DC143C'
  };

  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <h4>Categories</h4>
          {menu.map(item =>
            <li className="nav-item"
              data-toggle="tooltip"
              title={item.description} key={item.category_id}>
              <Link
                to={`/products/inCategory/${item.category_id}`}
                style={sidebarActive === item.name ? itemStyle : {}}
                data-key={item.category_id}
                onClick={handleSidebarClick}
                className="nav-link">
                {item.name}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
    )
}
export default Sidebar;
