import PropTypes from 'prop-types';
import React from 'react';

import Firebase from 'shared/api/Firebase';

export const FirebaseContext = React.createContext();

const FirebaseContextProvider = ({ children }) => {
  const firebase = new Firebase();
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
};

FirebaseContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default FirebaseContextProvider;
