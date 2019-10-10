import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routesList } from './constants/routes';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routesList.map(route => <Route {...route} />)}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}
