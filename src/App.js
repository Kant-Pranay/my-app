import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Counter from './Components/Counter'
import TimeComp from './Components/TimeComp'
import NameList from './Components/NameList'
import Currency from './Components/Currency'
import { Provider } from './Contexts/Context'
import './App.css'


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path='/home'>
            <Provider>
              <Counter />
            </Provider>
          </Route>

          <Route exact path='/time'>
            <Provider>
              <TimeComp />
            </Provider>
          </Route>

          <Route exact path='/data'>
            <Provider>
              <NameList />
            </Provider>
          </Route>

          <Route exact path='/currency'>
            <Provider>
              <Currency />
            </Provider>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
