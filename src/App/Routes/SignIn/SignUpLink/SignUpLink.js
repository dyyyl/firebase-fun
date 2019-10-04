import React from 'react';
import { Link } from 'react-router-dom';

import { SIGN_UP } from 'shared/constants/routes';

const SignUpLink = () => (
  <p style={{ marginTop: '1rem' }}>
    Don&apos;t have an account? <Link to={SIGN_UP}>Sign Up!</Link>
  </p>
);

export default SignUpLink;
