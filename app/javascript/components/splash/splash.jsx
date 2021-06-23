import React from 'react';
import Businesses from '../businesses/businesses'
import Filter from '../search/filter'


const Splash = () => {
  
  return (
    <section className="splash">
      <figure className="splash-img">
        <img className="splash-img-src" src='assets/potions.jpg' alt="background-image" />
      </figure>
      <h2>Find the Best Businesses in Town</h2>
      <Filter categories={["Wand Shops", "Broomstick Repair", "Restaurants", "Curse Removal"]}/>
      <section className="splash-details">
        <h2>Jinx New York</h2>
        <Filter categories={["New York", "San Francisco", "Chicago", "Austin", "London"]}/>
        <Businesses />
      </section>
    </section>
  )
}

export default Splash