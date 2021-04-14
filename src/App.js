import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import PageScroll from './components/PageScroll'
import Mouse from './components/Mouse'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/scroll" component={LandingPage} />
        <Route exact path="/" component={PageScroll} />
        <Route exact path="/mouse" component={Mouse} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
