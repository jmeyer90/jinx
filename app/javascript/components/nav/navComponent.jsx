import React from 'react';
import { Link } from 'react-router-dom';
import NavSearch from '../search/navSearch'

const NavComponent = () => {
  return(
      <nav className={`nav-bar`}>
        <h1>NavComponent Bar</h1>
        {/* <Link to="/" className={`logo`}>
          <img className={`logo-img-src`} src={window.logoImg} alt="profile-image" />
        </Link> */}
        <NavSearch />
      </nav>
  )
}

export default NavComponent;