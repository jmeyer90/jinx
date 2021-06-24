import React from 'react';
import Businesses from '../businesses/businesses'
import Filter from '../search/filter'


const Splash = () => {
  
  return (
    <section className="splash">
      <figure className="splash-img">
        <img className="splash-img-src" src='assets/potions.jpg' alt="background-image" />
      </figure>
      <section className="splash-details">
        <section className="filter-section">
          <h2 className="filter-header">Find the Best Businesses in Town</h2>
          <Filter section="business-type-" categories={["Wand Shops", "Broomstick Repair", "Restaurants", "Curse Removal"]} />
        </section>
        <section className="filter-section">
          <h2 className="filter-header">Jinx New York</h2>
          <Filter section="location-" categories={["New York", "San Francisco", "Chicago", "Austin", "London"]}/>
        </section>
        <div className="hor-line"></div>
        <Businesses />
      </section>
    </section>
  )
}

export default Splash