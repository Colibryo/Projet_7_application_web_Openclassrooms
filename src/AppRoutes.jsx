import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./styles/index.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Accomodations from "./pages/Accommodations"
import Error from "./pages/Page-not-found"
//Ensemble des routes pour les pages du site ("accueil", "logements", "à propos" et "page d'erreur")
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/accomodations/:id">
          <Accomodations />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
