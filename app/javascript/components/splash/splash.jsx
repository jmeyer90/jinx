import React from 'react';
import Businesses from '../businesses/businesses'
import Filter from '../search/filter'


const Splash = () => {
  
  return (
    <section className="splash">
      <figure className="splash-img">
        <img className="splash-img-src" src='assets/potions.jpg' alt="background-image" />
      </figure>
      <Filter category={"Attribute"}/>
      <section className="splash-details">
        <Filter category={"Location"}/>
        <Businesses />
      </section>
    </section>
  )
}

export default Splash