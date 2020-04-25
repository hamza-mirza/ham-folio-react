import React from "react"

import SectionHeading from "./misc/SectionHeading"
import Gap from "./misc/Gap"

const Skills = () => (
  <section class="page-section skills">
    <div class="row">
      <SectionHeading text="Skills"/>
      <div class="skills__content">
        <div class="skills__text generic-text">
          <p class="generic-text">
            I'm proficient in an array of Front-End technologies. I'm always learning new tools to stay up to date with current design and technology trends. My current skillset involves:
          </p>
          <div className="skill__container">
          <div className="row">
            <div className="col-md-6">
              <div class="skills__skillset-box skills__skillset-box-1">
                <p class="skills__skill"><Gap/> HTML, CSS & JavaScript ES6+</p>
                <p class="skills__skill"> <Gap/> React, Redux & Firebase</p>
                <p class="skills__skill"><Gap/> Responsive Web Design</p>
              </div>
            </div>
            <div className="col-md-6">
              <div class="skills__skillset-box skills__skillset-box-2">
                <p class="skills__skill"><Gap/> Git & GitHub</p>
                <p class="skills__skill"><Gap/> Rest APIs</p>
                <p class="skills__skill"><Gap/> Build Tools - Gulp & Webpack</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Skills