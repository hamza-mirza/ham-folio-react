import React from "react"

const SectionHeading = (props) => 
<h3 className={`${ props.slightChange ? "section-heading-2" : "section-heading"} upperCase`}>{props.text}</h3>

export default SectionHeading