import React from 'react';

const Footer = () =>{
  return(
    <section className="footer-container">
      <section className="footer-details">
        <section className="footer-bio">
          <h1 className="footer-header">About Me</h1>
          <h1 className="footer-section-header">Justin James Meyer</h1>
          <p className="footer-bio-item">Full Stack Developer</p>          
          <p className="footer-bio-item">Sr Instructor for App Academy</p>
          <p className="footer-bio-item">Rails, React</p>
          <p className="footer-bio-item">MERN</p>
          <p className="footer-bio-item">Mathematics</p>
          <p className="footer-bio-item">Poetry</p>          
          <p className="footer-bio-item">Hiking</p>
        </section>

        <section className="footer-contact-container">
          <h1 className="footer-header">Contact Information</h1>

          <a className="footer-contact-item" href="mailto: meyerj.justin@gmail.com">
            <h1 className="footer-section-header">Email</h1>
            <p className="footer-contact-detail">meyerj.justin@gmail.com</p>
          </a>
          <a className="footer-contact-item" href="https://www.linkedin.com/in/justin-james-meyer/">
            <h1 className="footer-section-header">LinkedIn</h1>
            <p  className="footer-contact-detail">https://www.linkedin.com/in/justin-james-meyer/</p>
          </a>
          <a className="footer-contact-item" href="https://github.com/jmeyer90">
            <h1 className="footer-section-header">Github</h1>
            <p className="footer-contact-detail">https://github.com/jmeyer90</p>
          </a>
          <a className="footer-contact-item" href="https://github.com/jmeyer90">
            <h1 className="footer-section-header">AngleList</h1>
            <p className="footer-contact-detail">https://github.com/jmeyer90</p>
          </a>
          <a className="footer-contact-item" href="https://github.com/jmeyer90">
            <h1 className="footer-section-header">Hired</h1>
            <p className="footer-contact-detail">https://github.com/jmeyer90</p>
          </a>
        </section>
      </section>
      <img className="footer-img-src" src={window.footer} alt="mountain-footer"/>
    </section>
  )
}

export default Footer;