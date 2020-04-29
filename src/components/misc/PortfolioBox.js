import React from "react"

import { Link } from "react-router-dom"

const PortfolioBox = ({ pathname, title, imagePath, setOnHomePage }) => {
  return (
    <div onClick={() => setOnHomePage(false)} className="col-md-6 portfolio__image-container">
      <Link to={{pathname, state: { title }}}>
        <img className="portfolio__image" src={imagePath} alt="`Project Thumbnail`"/>
        <h4 className="portfolio__title">{title}</h4>
      </Link>
    </div>
  )
}

export default PortfolioBox