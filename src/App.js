import React, {useState, useEffect} from "react"
import "./styles/styles.scss"

import State from "./components/state/State"

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
    <State.Provider value={{ onHomePage, setOnHomePage }}>
      <React.Fragment>
        <Header onHomePage={onHomePage} />
        <div className="wrapper">
          <About/>
          <Skills/>
          <Portfolio/>
          <Links/>
        </div>
      </React.Fragment>
    </State.Provider>
  )
}

export default App