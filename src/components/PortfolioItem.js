import React from "react"
import {Link} from "react-router-dom"

import Header from "./Header"
import SectionHeading from "./misc/SectionHeading"
import ProjectImage from "./misc/ProjectImage"
import ProjectDescription from "./misc/ProjectDescription"

const PortfolioItem = props => {
  const path = props.location.pathname
  return (
    <React.Fragment>
      <Header/>
      <section className="page-section portfolio-item">
        <div className="wrapper">
          <SectionHeading slightChange={true} text={props.location.state.title} />
          <div className="row">
            <div className="col-md-12">
              <ProjectDescription path={path} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ProjectImage path={path}/>
            </div>
          </div>
          <Link to="/"><button className="portfolio-item__button upperCase">Go back</button></Link>
        </div>
      </section>
    </React.Fragment>
  )
}
export default PortfolioItem