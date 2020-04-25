import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import App from "./App"
import PortfolioItem from "./components/PortfolioItem"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/portfolioItem/:id" component={PortfolioItem}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router