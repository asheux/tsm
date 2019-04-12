import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({...props}) => {
  const { menu } = props;
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <h4>Categories</h4>
          {menu.map(item =>
            <li className="nav-item" key={item.category_id}>
              <Link to="#" className="nav-link">
                <span className="feather"></span>
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
