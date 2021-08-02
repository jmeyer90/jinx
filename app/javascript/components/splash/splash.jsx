import React from 'react';
import Businesses from '../businesses/businesses'
import Filter from '../search/filter'

const Splash = () => {
  
  return (
    <section className="splash">
      <figure className="splash-img">
        <img className="splash-img-src" src={window.splashImage} alt="background-image" />
      </figure>
      <section className="splash-details">
        <section className="filter-section">
          <h2 className="splash-header">Find the Best Businesses in Town</h2>
          <Filter section="business-type-" categories={["Wand Shops", "Broomstick Repair", "Restaurants", "Curse Removal"]} />
        </section>
        <section className="filter-section">
          <h2 className="splash-header">Jinx New York</h2>
          <Filter section="location-" categories={["Little Whinging", "Hogsmeade", "Diagon Alley", "Knockturn Alley", "Godric's Hollow"]}/>
        </section>
        <div className="hor-line"></div>
        <h3 className="splash-subheader">Magically Marvelous Businesses</h3>
        <Businesses />
      </section>
    </section>
  )
}

export default Splash