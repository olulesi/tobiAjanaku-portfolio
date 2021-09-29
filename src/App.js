import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import PageScroll from './components/landingComponents/PageScroll'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/scroll" component={LandingPage} />
        <Route exact path="/" component={PageScroll} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
