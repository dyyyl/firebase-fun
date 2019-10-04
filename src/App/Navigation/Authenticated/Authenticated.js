import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from 'shared/constants/routes';

import SignOut from './SignOut';

const Authenticated = () => (
  <>
    <Link to={Routes.LANDING}>Landing</Link>
    <Link to={Routes.HOME}>Home</Link>
    <Link to={Routes.ACCOUNT}>Account</Link>
    <Link to={Routes.ADMIN}>Admin</Link>
    <SignOut />
  </>
);

export default Authenticated;
