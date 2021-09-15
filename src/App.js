import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './containers/Home'
import Post from './containers/Post'

function App() {
  return (
    <main>
      <section>
        <Router>
          <Switch>
            <Route path="/:subject/:id">
              <div>
                <Post />
              </div>
            </Route>
            <Route path="/">
              <div>
                <Home />
              </div>
            </Route>
          </Switch>
        </Router>
      </section>
    </main>
  );
}

export default App;
