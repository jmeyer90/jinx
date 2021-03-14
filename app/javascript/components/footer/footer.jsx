import React from 'react';

const Footer = () =>{
  return(
    <section className="footer-container">
      <section className="footer-details">
        <h1 className="footer-header">Footer Details</h1>
        <section className="footer-contact-container">
          <a className="footer-contact-item" href="mailto: meyerj.justin@gmail.com">
            <h1 className="footer-section-header">Email</h1>
            <p className="footer-contact-detail">meyerj.justin@gmail.com</p>
          </a>
          <a className="footer-contact-item" href="https://www.linkedin.com/in/justin-meyer-39a915181/">
            <h1 className="footer-section-header">LinkedIn</h1>
            <p  className="footer-contact-detail">https://www.linkedin.com/in/justin-meyer-39a915181/</p>
          </a>
          <a className="footer-contact-item" href="https://github.com/jmeyer90">
            <h1 className="footer-section-header">Github</h1>
            <p className="footer-contact-detail">https://github.com/jmeyer90</p>
          </a>
        </section>
      </section>
      <img className="footer-img-src" src="assets/mountain-footer.jpg" alt="mountain-footer"/>
    </section>
  )
}

export default Footer;