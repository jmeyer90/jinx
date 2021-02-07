import React from 'react';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  return(
    <header className={`nav-container`}>
      <nav className={`nav-bar`}>
        <h1>NavComponent Bar</h1>
        {/* <Link to="/" className={`logo`}>
          <img className={`logo-img-src`} src={window.logoImg} alt="profile-image" />
        </Link> */}
      </nav>
    </header>
  )
}

export default NavComponent;