import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import * as ROUTES from 'shared/constants/routes';
import isLoggedIn from 'shared/helpers/isLoggedIn';
import { useAuth } from 'shared/hooks/useAuth';

import Account from './Account';
import Admin from './Admin';
import Home from './Home';
import Landing from './Landing';
import RecoverPassword from './RecoverPassword';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Routes = () => {
  const auth = useAuth();

  return (
    <>
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.RECOVER_PASSWORD} component={RecoverPassword} />
      <Route
        path={ROUTES.HOME}
        render={() => (isLoggedIn(auth.user) ? <Home /> : <Redirect to={ROUTES.SIGN_IN} />)}
      />
      <Route
        path={ROUTES.ACCOUNT}
        render={() => (isLoggedIn(auth.user) ? <Account /> : <Redirect to={ROUTES.SIGN_IN} />)}
      />
      <Route
        path={ROUTES.ADMIN}
        render={() => (isLoggedIn(auth.user) ? <Admin /> : <Redirect to={ROUTES.SIGN_IN} />)}
      />
    </>
  );
};

export default Routes;
