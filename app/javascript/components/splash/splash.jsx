import React from 'react';
import SearchBar from '../search/searchBar'
import Businesses from '../businesses/businesses'

// 
const Splash = () => {
  
  return (
    <section className="splash">
      <figure className="splash-img">
        <img className="splash-img-src" src='assets/potions.jpg' alt="background-image" />
      </figure>
      <SearchBar />
      <Businesses />
    </section>
  )
}

export default Splash