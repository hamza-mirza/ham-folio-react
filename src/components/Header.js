import React from "react"

import {Link} from "react-router-dom"

const Header = (props) => (
  <section className="header">
      <div className="wrapper">
        <div className="header__content">
          <div className="row">
            <div className="col-sm-6">
              <div className="header__content-left">
                <Link style={{ textDecoration: 'none', color: "inherit" }} to="/">
                  <h1 className="header__title upperCase">
                    Hamza <span className="header__title-bottom">Shahid</span>
                  </h1>
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="header__content-right">
                <h3 className="header__subtitle">Front End Developer</h3>
                <p className="header__location">Manchester, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)

export default Header