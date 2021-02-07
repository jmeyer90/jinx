import React from 'react';

const SplashComponent = () => {
  return (
    <div>
      <h1>SplashComponent</h1>
      <section className="splash">
        <figure className="splash-img">
          <p>SplashComponent Image</p>
          {/* <img className="splash-img-src" src={window.splashImg} alt="background-image" /> */}
        </figure>
        <section className="splash-index-container">
          {/* {this.regions()} */}
          <h2>Index Items</h2>
          <ul className="splash-index">
            {/* {reviews.map( review => (
              < BuinessIndexItem key={review.id} business={this.matchBizToReview(review)} review={review}/>
            ))} */}
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </section>
      </section>
    </div>
  )
}

export default SplashComponent