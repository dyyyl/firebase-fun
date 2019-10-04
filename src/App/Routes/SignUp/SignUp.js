import React, { useReducer, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import Input from 'shared/components/Input';
import FormLayout from 'shared/components/Layouts/FormLayout';
import { useAuth } from 'shared/hooks/useAuth';
import formReducer from 'shared/reducers/formReducer';
import { HOME } from 'shared/constants/routes';

const initialState = {
  username: '',
  email: '',
  initialPassword: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const auth = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (state.initialPassword === state.confirmPassword) {
      setErrorMessage(null);

      const { username, email, confirmPassword } = state;

      try {
        const authorizedUser = await auth.signup(email, confirmPassword);
        console.log({ authorizedUser, username });
        setRedirect(true);
      } catch (error) {
        console.error(error.message);
      }
    } else setErrorMessage("Passwords don't match idiot 🙅🏽‍♂️");
  };

  const handleChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };

  return (
    <>
      <FormLayout>
        <Form onSubmit={handleSubmit}>
          <h1>Sign Up!</h1>
          <Input
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            required
          />
          <Input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            required
          />
          <Input
            name="initialPassword"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            minLength="8"
            required
          />
          <Input
            name="confirmPassword"
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
            required
          />
          {errorMessage && <p>{errorMessage}</p>}
          <Button type="submit">Sign Up!</Button>
        </Form>
      </FormLayout>
      {redirect && <Redirect to={HOME} />}
    </>
  );
};

export default SignUp;
