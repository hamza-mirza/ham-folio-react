import React from 'react'
import {Link} from "react-router-dom"

const HeaderSecondary = () => (
  <>
    <div className="col-sm-6">
      <div className="header__content-left">
        <Link style={{ textDecoration: 'none', color: "inherit" }} to="/">
          <h1 className="header__title upperCase">
            My <span className="header__title-bottom">Projects</span>
          </h1>
        </Link>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="header__content-right">
        <Link style={{ textDecoration: 'none', color: "inherit" }} to="/">
          <h3 className="header__subtitle">Hamza Shahid</h3>
          <p className="header__location">Front End Developer</p>
        </Link>
      </div>
    </div>
  </>
)

export default HeaderSecondary