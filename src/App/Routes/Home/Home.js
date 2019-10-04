import React, { useEffect, useState } from 'react';

import Layout from 'shared/components/Layouts/FormLayout';
import { useAuth } from 'shared/hooks/useAuth';

const Home = () => {
  const auth = useAuth();
  const [email, setEmail] = useState('nerd');

  useEffect(() => {
    if (auth.user) {
      setEmail(auth.user.email);
    }
  }, [auth.user]);

  return (
    <Layout>
      <h1>Welcome, {email}</h1>
    </Layout>
  );
};

export default Home;
