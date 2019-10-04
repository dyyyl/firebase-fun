import React, { useReducer, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import Input from 'shared/components/Input';
import FormLayout from 'shared/components/Layouts/FormLayout';
import { useAuth } from 'shared/hooks/useAuth';
import formReducer from 'shared/reducers/formReducer';
import { HOME } from 'shared/constants/routes';

import RecoverPasswordLink from './RecoverPasswordLink';
import SignUpLink from './SignUpLink';

const initialState = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [redirect, setRedirect] = useState(false);

  const auth = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = state;

    try {
      await auth.signin(email, password);
      setRedirect(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };

  return (
    <>
      <FormLayout>
        <Form onSubmit={handleSubmit}>
          <h1>
            Sign In{' '}
            <span role="img" aria-label="blast off">
              🚀
            </span>
          </h1>
          <Input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            required
          />
          <Input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            minLength="8"
            required
          />
          <Button type="submit">Sign In!</Button>
          <SignUpLink />
          <RecoverPasswordLink />
        </Form>
      </FormLayout>
      {redirect && <Redirect to={HOME} />}
    </>
  );
};

export default SignIn;
