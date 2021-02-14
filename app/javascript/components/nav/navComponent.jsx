import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../search/searchBar'

const NavComponent = () => {
  const location = useLocation()
  
  return(
      <nav className={`nav-bar`}>
        <h1>NavComponent Bar</h1>
        <img className="nav-logo" src='assets/jinx_logo.png' alt="jinx-logo" />
        {/* <Link to="/" className={`logo`}>
          <img className={`logo-img-src`} src={window.logoImg} alt="profile-image" />
        </Link> */}
        <SearchBar />
      </nav>
  )
}

export default NavComponent;