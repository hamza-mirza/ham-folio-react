import React from "react"

import HeaderMain from "./misc/HeaderMain"
import HeaderSecondary from "./misc/HeaderSecondary"

const Header = (props) => {
  return (
    <section className="header">
      <div className="wrapper">
        <div className="header__content">
          <div className="row">
            {
              props.onHomePage ?
              <HeaderMain onHomePage={props.onHomePage} setOnHomePage={props.setOnHomePage} />
              :
              <HeaderSecondary onHomePage={props.onHomePage} setOnHomePage={props.setOnHomePage} />
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header