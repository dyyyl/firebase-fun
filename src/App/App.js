import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AuthentionContextProvider from 'shared/hooks/useAuth';
import FirebaseContextProvider from 'shared/contexts/FirebaseContext';
import GlobalStyle from 'shared/styles/GlobalStyle';

import Navigation from './Navigation';
import Routes from './Routes';

const App = () => (
  <FirebaseContextProvider>
    <AuthentionContextProvider>
      <Router>
        <Navigation />
        <hr style={{ margin: 0 }} />
        <Routes />
      </Router>
      <GlobalStyle />
    </AuthentionContextProvider>
  </FirebaseContextProvider>
);

export default App;
