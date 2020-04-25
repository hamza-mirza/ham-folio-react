import React from "react"

import SectionHeading from "./misc/SectionHeading"

const Links = () => (
  <section class="page-section links">
    <div class="row">
      <SectionHeading text="Contact" />
      <div class="links__content">
        <div class="links__text generic-text">
          <p>Get in touch. Check out my projects on GitHub, watch my YouTube tutorials or follow me on Instagram - I'm a lot cooler on there, just like everyone else.</p>
        </div>
        <div class="links__icons">
          <a class="links__icon links__icon-github" href=""><i class="fa fa-github"></i></a>
          <a class="links__icon links__icon-youtube" href=""><i class="fa fa-youtube"></i></a>
          <a class="links__icon links__icon-insta" href=""><i class="fa fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </section>
)

export default Links