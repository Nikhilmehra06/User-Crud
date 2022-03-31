import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 m-2 rounded shadow-lg">
      <Link to="/" className="navbar-brand ml-5">
        React-CRUD
      </Link>
      <Link to="/add" className="btn  btn-block btn-outline-light ms-auto">
        Add User
      </Link>
    </nav>
  );
};

export default Navbar;
