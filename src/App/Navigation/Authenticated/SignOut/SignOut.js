import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Button from 'shared/components/Button';
import { LANDING } from 'shared/constants/routes';
import { useAuth } from 'shared/hooks/useAuth';

const SignOut = () => {
  const auth = useAuth();
  const [redirect, setRedirect] = useState(false);

  const handleSignout = () => {
    auth.signout();
    setRedirect(true);
  };
  return (
    <>
      <Button
        style={{ width: 'auto', marginBottom: '1rem' }}
        type="button"
        onClick={handleSignout}
      >
        Sign Out
      </Button>
      {redirect ? <Redirect to={LANDING} /> : ''}
    </>
  );
};

export default SignOut;
