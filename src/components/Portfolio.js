import React from "react"
import { Link } from "react-router-dom"

import SectionHeading from "./misc/SectionHeading"

const Portfolio = () => (
  <section className="page-section portfolio">
    <div className="row">
      <SectionHeading text="Portfolio" />
      <div className="portfolio__text">
      <p className="generic-text">
        I've created a range of projects, from static HTML & CSS websites to dynamic web apps in React, Node and Express. Below are some of the examples of the front-end work I've done. Click on any of them to view.
        </p>
      </div>
      <div className="portfolio__content">
        <div className="row">
            <div className="col-md-6 portfolio__image-container">
              <Link to={{pathname: "/portfolioItem/imageApp", state: { title: "Image Search" }}}>
                <img className="portfolio__image" src={require("../img/project-imageSearch.png")} alt="Photo"/>
                <h4 className="portfolio__title">Image Search</h4>
              </Link>
            </div>
            <div className="col-md-6 portfolio__image-container">
              <Link to={{pathname: "/portfolioItem/hamzaShahidPortfolio", state: { title: "Hamza Shahid" }}}>
                <img className="portfolio__image" src={require("../img/hamzaShahid-thumnail.jpg")} alt="Photo"/>
                <h4 className="portfolio__title">Hamza Shahid</h4>
              </Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 portfolio__image-container">
              <Link to={{pathname: "/portfolioItem/getFit", state: { title: "GetFit Website" }}}>
                <img className="portfolio__image" src={require("../img/getFit-thumnail.jpg")} alt="Photo"/>
                <h4 className="portfolio__title">GetFit Website</h4>
              </Link>
            </div>
            <div className="col-md-6 portfolio__image-container">
              <Link to={{pathname: "/portfolioItem/weatherApp", state: { title: "Weather Finder" }}}>
                <img className="portfolio__image" src={require("../img/sample.jpg")} alt="Photo"/>
                <h4 className="portfolio__title">Weather Finder</h4>
              </Link>
            </div>
        </div>
      </div>
    </div>
  </section>
)
export default Portfolio