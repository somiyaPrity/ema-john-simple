import React from 'react';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className='header'>
      <img className='logo' src={logo} alt='' />
      <nav>
        <a href='/shop'>Shop</a>
        <a href='/review'>Order review</a>
        <a href='/inventory'>Manage inventory Here</a>
        {user?.email ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <a href='/login'>Login</a>
        )}
      </nav>
    </div>
  );
};

export default Header;
