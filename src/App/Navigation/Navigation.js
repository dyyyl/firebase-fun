import React from 'react';

import { useAuth } from 'shared/hooks/useAuth';

import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';

import Layout from './Layout';

const Navigation = () => {
  const auth = useAuth();
  return <Layout>{auth.user ? <Authenticated /> : <Unauthenticated />}</Layout>;
};

export default Navigation;
