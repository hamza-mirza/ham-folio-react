import React, {useState, useEffect} from "react"
import "./styles/styles.scss"

import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Links from "./components/Links"
import Portfolio from "./components/Portfolio"

const App = () => {
  const [ onHomePage, setOnHomePage ] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <React.Fragment>
      <Header onHomePage={onHomePage} setOnHomePage={setOnHomePage} />
      <div className="wrapper">
        <About/>
        <Skills/>
        <Portfolio onHomePage={onHomePage} setOnHomePage={setOnHomePage} />
        <Links/>
      </div>
    </React.Fragment>
  )
}

export default App