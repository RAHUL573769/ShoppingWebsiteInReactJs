import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <nav>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/review">Order Review</Link></li>
            <li><Link to="/history">Manage History</Link></li>
          </nav>
        </div>
    );
};

export default Header;