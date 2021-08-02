import React from 'react';

const Footer = () =>{
  return(
    <section className="footer-container">
      <section className="footer-details">
        <section className="footer-bio">
          <h1 className="footer-header">About Me</h1>
          <p className="footer-bio-item">Justin James Meyer, based out of Brooklyn, NY</p>
          <p className="footer-bio-item">Full-Stack Developer.</p>
          <p className="footer-bio-item">Sr Instructor for App Academy, the top rated coding bootcamp</p>
          <p className="footer-bio-item">Fluent in: Ruby, Ruby on Rails, JavaScript, React, Redux, the MERN stack, CSS, HTML, and TDD.</p>
          <p className="footer-bio-item">I have a background in mathematics education and proved an original theorem in Number Theory, which was presented at CANT 2018 and MAA Metro NY.</p>
          <p className="footer-bio-item">In my spare time, I write poetry and frequently explore hiking trails around New York City.</p>
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