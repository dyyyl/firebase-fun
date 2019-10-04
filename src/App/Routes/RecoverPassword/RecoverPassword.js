import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import Input from 'shared/components/Input';
import FormLayout from 'shared/components/Layouts/FormLayout';
import { FirebaseContext } from 'shared/contexts/FirebaseContext';
import { SIGN_IN } from 'shared/constants/routes';

const RecoverPassword = () => {
  const [email, setEmail] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await firebase.passwordReset(email);
      setRedirect(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (event) => setEmail(event.target.value);

  return (
    <>
      <FormLayout>
        <Form onSubmit={handleSubmit}>
          <h1>I FORGOT MY PASSWORD</h1>
          <Input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            required
          />
          <Button>
            I&apos;m a dummy{' '}
            <span role="img" aria-label="peeps">
              👀
            </span>
          </Button>
        </Form>
      </FormLayout>
      {redirect && <Redirect to={SIGN_IN} />}
    </>
  );
};

export default RecoverPassword;
