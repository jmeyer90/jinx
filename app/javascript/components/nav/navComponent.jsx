import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../search/searchBar'

const NavComponent = () => {
  
  return(
      <nav className="nav-bar">
        <Link to="/">
          <img className="nav-logo" src='assets/jinx_logo.png' alt="jinx-logo" />
        </Link>
        <SearchBar />
        <button >
          Login
        </button>
        <Link to="/signup">
          Sign Up
        </Link>
        <button>
          Demo User
        </button>
      </nav>
  )
}

export default NavComponent;