import React from "react"

import { weather, image, hamza, getFit } from "./helpers/imageUrls"

const ProjectImage = props => {
  return (
    <div>
      { 
        props.path.includes("weather") ? 
        <img className="portfolio-item__image" src={weather} alt="Weather Finder App"/> 
        :
        props.path.includes("image") ? 
        <img className="portfolio-item__image" src={image} alt=" Search App"/> 
        :  
        props.path.includes("hamza") ? 
        <img className="portfolio-item__image" src={hamza} alt="Hamza Shahid"/> 
        :
        props.path.includes("getFit") ? 
        <img className="portfolio-item__image" src={getFit} alt="GetFit Landing Page"/> 
        :  
        null  
      }
    </div>
  )
}

export default ProjectImage