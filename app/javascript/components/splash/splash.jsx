import React from 'react';
import Businesses from '../businesses/businesses'

const Splash = () => {
  
  return (
    <section className="splash">
      <figure className="splash-img">
        <img className="splash-img-src" src='assets/potions.jpg' alt="background-image" />
      </figure>
      <section>Filters</section>
      <Businesses />
    </section>
  )
}

export default Splash