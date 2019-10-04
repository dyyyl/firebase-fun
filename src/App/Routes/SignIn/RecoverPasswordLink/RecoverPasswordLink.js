import React from 'react';
import { Link } from 'react-router-dom';

import { RECOVER_PASSWORD } from 'shared/constants/routes';

const RecoverPasswordLink = () => (
  <p style={{ marginTop: '1rem' }}>
    Forget your password? <Link to={RECOVER_PASSWORD}>Recover!</Link>
  </p>
);

export default RecoverPasswordLink;
