import React from 'react'
 
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Accomodations from './pages/Accommodations'
import Error from './pages/Page-not-found'


const App = ()=> {
    return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route path="/Accomodations">
          <Accomodations />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  
   
)}

export default App