import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import LoginScene from '/imports/ui/scenes/LoginScene';

const browserHistory = createBrowserHistory();

const Routes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={LoginScene} />
      <Redirect path="*" component={LoginScene} />
    </div>
  </Router>
);

export default Routes;
