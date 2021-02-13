import React from 'react';
import SplashSearch from '../search/splashSearch'
import Businesses from '../businesses/businesses'

const SplashComponent = () => {
  return (
    <section className="splash">
      <figure className="splash-img">
        <p>SplashComponent Image</p>
        {/* <img className="splash-img-src" src={window.splashImg} alt="background-image" /> */}
        <SplashSearch />
      </figure>
      <Businesses />
    </section>
  )
}

export default SplashComponent