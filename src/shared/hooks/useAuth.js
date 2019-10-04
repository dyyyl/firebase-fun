import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';

import { FirebaseContext } from 'shared/contexts/FirebaseContext';

export const AuthContext = React.createContext();

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(AuthContext);

// Provider hook that creates auth object and handles state
const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const { firebase } = useContext(FirebaseContext);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (email, password) => {
    const response = await firebase.auth.signInWithEmailAndPassword(
      email,
      password,
    );
    setUser(response.user);
    return response.user;
  };

  const signup = async (email, password) => {
    const response = await firebase.auth.createUserWithEmailAndPassword(
      email,
      password,
    );
    setUser(response.user);
    return response.user;
  };

  const signout = async () => {
    await firebase.auth.signOut();
    setUser(false);
  };

  const sendPasswordResetEmail = async (email) => {
    await firebase.auth.sendPasswordResetEmail(email).then(() => true);
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((userData) => {
      if (userData) {
        setUser(userData);
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [firebase, user]);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
  };
};

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
const AuthentionContextProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthentionContextProvider;

AuthentionContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
