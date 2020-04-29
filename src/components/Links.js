import React from "react"

import SectionHeading from "./misc/SectionHeading"

const Links = () => (
  <section className="page-section links">
    <div className="row">
      <SectionHeading text="Contact" />
      <div className="links__content">
        <div className="links__text generic-text">
          <p>Get in touch. Check out my projects on GitHub, watch my YouTube tutorials or follow me on Instagram - I'm a lot cooler on there, just like everyone else.</p>
        </div>
        <div className="links__icons">
          <a className="links__icon links__icon-github" rel="noopener noreferrer" href="https://github.com/hamza-mirza"><i className="fa fa-github"></i></a>
          <a className="links__icon links__icon-youtube" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCBV-JvG9Ubkj7AU6Cxls1Tw?view_as=subscriber">
            <i className="fa fa-youtube"></i>
          </a>
          <a className="links__icon links__icon-insta" rel="noopener noreferrer" href="https://www.instagram.com/hmz.js/">
            <i className="fa fa-instagram">
          </i></a>
        </div>
      </div>
    </div>
  </section>
)

export default Links