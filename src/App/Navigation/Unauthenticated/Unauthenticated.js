import React from 'react';
import { Link } from 'react-router-dom';

import { SIGN_IN, LANDING } from 'shared/constants/routes';

const Unauthenticated = () => (
  <>
    <Link to={SIGN_IN}>Sign In</Link>
    <Link to={LANDING}>Landing</Link>
  </>
);

export default Unauthenticated;
