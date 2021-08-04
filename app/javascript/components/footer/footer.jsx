import React from 'react';

const Footer = () =>{
  return(
    <section className="footer-container">
      <section className="footer-details">
        <section className="footer-bio">
          <h1 className="footer-header">About Me</h1>
          <p className="footer-bio-item">Justin James Meyer, based out of Brooklyn, NY</p>
          <p className="footer-bio-item">
            I'm a full-stack developer with a background in mathematics and passion for lifelong learning. 
            The continuous challenge of exploring new concepts and technologies is one which should be met 
            with excitement and genuine curiosity. The field of computer science keeps us on our toes, 
            leading us towards a never ending and captivating journey where we can always learn more.
          </p>
          <p className="footer-bio-item">
            In my spare time, I write poetry and frequently explore hiking trails around New York City.
          </p>
          <p className="footer-bio-item">
            Fluency in JavaScript, React, Redux, Express, Node.js, MongoDB, Ruby, Ruby on Rails,
            SQL, PostgreSQL, AWS, Heroku, HTML, CSS, and git.
          </p>
        </section>

        <section className="footer-contact-container">
          <h1 className="footer-header">Contact Information</h1>

          <a className="footer-contact-item" href="mailto: meyerj.justin@gmail.com">
            <h1 className="footer-section-header">Email</h1>
            <p className="footer-contact-detail">meyerj.justin@gmail.com</p>
          </a>
          <a className="footer-contact-item" href="https://www.linkedin.com/in/justin-james-meyer/">
            <h1 className="footer-section-header">LinkedIn</h1>
            <p  className="footer-contact-detail">https://www.linkedin.com/in/justin-james-meyer</p>
          </a>
          <a className="footer-contact-item" href="https://github.com/jmeyer90">
            <h1 className="footer-section-header">Github</h1>
            <p className="footer-contact-detail">https://github.com/jmeyer90</p>
          </a>
          <a className="footer-contact-item" href="https://angel.co/u/justin-j-meyer">
            <h1 className="footer-section-header">AngleList</h1>
            <p className="footer-contact-detail">https://angel.co/u/justin-j-meyer</p>
          </a>
        </section>
      </section>
      <img className="footer-img-src" src={window.footer} alt="mountain-footer"/>
    </section>
  )
}

export default Footer;