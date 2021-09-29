import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './components/Main'
import PageScroll from './components/landingComponents/PageScroll'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/main" component={Main} />
        <Route exact path="/" component={PageScroll} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
