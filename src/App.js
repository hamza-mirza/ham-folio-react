import React from 'react'
import "./styles/styles.scss"

import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Links from "./components/Links"
import Portfolio from "./components/Portfolio"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="wrapper">
          <About/>
          <Skills/>
          <Portfolio/>
          <Links/>
        </div>
      </React.Fragment>
    )
  }
}

export default App