import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link>Shop</Link></li>
      <li><Link>Order</Link></li>
      <li><Link>About Us</Link></li>
      <li><Link>Contact Us</Link></li>
    </ul>
  </div>
</div>
            
        </nav>
    );
};

export default Header;