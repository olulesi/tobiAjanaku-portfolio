import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './components/Main'
import PageScroll from './components/landingComponents/PageScroll'
import WellnessCentre from './components/architecture/wellnessCentre/index'
import CreativeRetrofit from './components/architecture/creativeRetrofit/index'
import Arusha from './components/tanzania/Arusha'
import Playground from './components/Playground'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/main" component={Main} />
        <Route exact path="/" component={PageScroll} />
        <Route exact path="/architecture/wellnessCentre" component={WellnessCentre} />
        <Route exact path="/architecture/creativeRetrofit" component={CreativeRetrofit} />
        <Route exact path="/tanzania" component={Arusha} />
        <Route exact path="/playground" component={Playground} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
