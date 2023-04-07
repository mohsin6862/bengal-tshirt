import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="navbar bg-base-300">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-green-700 text-3xl font-bold">Bengal  <span className='ml-3 text-amber-600'> Tshirt</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-bold text-xl">
      <li><Link to='/'>Shop</Link></li>
      <li><Link to='/order'>Order</Link></li>
      <li><Link to='/about'>About Us</Link></li>
      <li><Link to='/contact'>Contact Us</Link></li>
    </ul>
  </div>
</div>
            
        </nav>
    );
};

export default Header;