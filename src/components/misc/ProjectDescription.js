import React from "react"

import descriptions from "./helpers/projectDescriptions"

import LivePreview from "./LivePreview"

const ProjectDescription = props => {
  return (
    <div>
      { 
        props.path.includes("weather") ? 
        <>
          <p className="generic-text">{ descriptions.weather.text1 }</p> 
          <p className="generic-text">{ descriptions.weather.text2 }</p> 
        </>
        :
        props.path.includes("image") ? 
        <>
          <p className="generic-text">{ descriptions.image.text1 }</p> 
          <p className="generic-text">{ descriptions.image.text2 }</p> 
          <LivePreview url={descriptions.image.url} />
        </>
        :
        props.path.includes("hamza") ? 
        <>
          <p className="generic-text">{ descriptions.hamza.text1 }</p> 
          <p className="generic-text">{ descriptions.hamza.text2 }</p> 
        </>
        :
        props.path.includes("getFit") ? 
        <>
          <p className="generic-text">{ descriptions.getFit.text1 }</p> 
          <p className="generic-text">{ descriptions.getFit.text2 }</p> 
          <LivePreview url={descriptions.getFit.url}/>
        </>
        :  
        null  
      }
    </div>
  )
}

export default ProjectDescription