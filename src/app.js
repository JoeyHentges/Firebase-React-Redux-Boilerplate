import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import SecureHome from './pages/secure/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        {/* Unsecure Routes */}
        <Route exact path={ROUTES.HOME} component={Home} />
        <IsUserRedirect loggedInPath={ROUTES.HOME} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect loggedInPath={ROUTES.HOME} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <IsUserRedirect loggedInPath={ROUTES.HOME} path={ROUTES.FORGOT_PASSWORD}>
          <ForgotPassword />
        </IsUserRedirect>

        {/* Secure Routes */}
        <ProtectedRoute redirectPath={ROUTES.SIGN_IN} exact path={ROUTES.SECURE_HOME}>
          <SecureHome />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
