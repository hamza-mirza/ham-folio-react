import React from "react"

import SectionHeading from "./misc/SectionHeading"

const About = () => (
  <section className="page-section about">
    <div className="row">
      <SectionHeading text="Profile" />
      <div className="about__content">
        <div className="about__text generic-text">
          <p><span className="about__greeting">&ldquo;</span>Hi! I'm Hamza, a self-taught <b>Front-End Developer</b> from Manchester who's able to build a web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using best practices and cutting-edge technologies.</p>

          <p>I also have a <a className="about__link" href="https://www.youtube.com/channel/UCBV-JvG9Ubkj7AU6Cxls1Tw?view_as=subscriber" target="_blank">YouTube channel</a> dedicated to teaching web development. In January 2018, I created my first ever React tutorial. Since then, I've taught JavaScript, React, Node and Express to thousands of people through my tutorials.</p>
        </div>
      </div>
    </div>
  </section>
)

export default About