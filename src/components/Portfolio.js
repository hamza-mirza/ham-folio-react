import React from "react"

import PortfolioBox from "./misc/PortfolioBox"
import SectionHeading from "./misc/SectionHeading"

const Portfolio = ({setOnHomePage}) => (
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
          <PortfolioBox
            setOnHomePage={setOnHomePage} 
            pathname="/portfolioItem/imageApp" 
            title="Image Search" 
            imagePath={require("../img/project-imageSearch.png")} 
          />
          <PortfolioBox
            setOnHomePage={setOnHomePage} 
            pathname="/portfolioItem/hamzaShahidPortfolio" 
            title="Hamza Shahid" 
            imagePath={require("../img/hamzaShahid-thumnail.jpg")} 
          />
        </div>
        <div className="row">
          <PortfolioBox
            setOnHomePage={setOnHomePage} 
            pathname="/portfolioItem/getFit" 
            title="GetFit Website" 
            imagePath={require("../img/getFit-thumnail.jpg")} 
          />
          <PortfolioBox
            setOnHomePage={setOnHomePage} 
            pathname="/portfolioItem/weatherApp" 
            title="Weather Finder," 
            imagePath={require("../img/sample.jpg")} 
          />
        </div>
      </div>
    </div>
  </section>
)
export default Portfolio