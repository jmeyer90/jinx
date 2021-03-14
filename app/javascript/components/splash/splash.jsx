import React from 'react';
import Businesses from '../businesses/businesses'
import LocationFilter from '../search/locationFilter'


const Splash = () => {
  
  return (
    <section className="splash">
      <figure className="splash-img">
        <img className="splash-img-src" src='assets/potions.jpg' alt="background-image" />
      </figure>
      <section className="splash-details">
        <LocationFilter />
        <Businesses />
      </section>
    </section>
  )
}

export default Splash