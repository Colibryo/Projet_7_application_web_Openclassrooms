import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './pages/Footer'
import Accomodations from './pages/Accomodations'
import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route path="/Accomodations">
          <Accomodations />
        </Route>
        <Route path="/Footer">
          <Footer />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)