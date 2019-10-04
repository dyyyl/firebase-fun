import styled from 'styled-components';

const Input = styled.input`
  height: 5rem;
  width: 100%;
  padding-left: 1rem;
  margin-top: 0.5rem;
  margin-right: 5rem;
  font-size: 2rem;
  border: 0px;
  border-bottom: 2px solid black;
  transition: linear 0.05s;

  &:focus {
    transition: linear 0.075s;
    border: 2px solid black;
  }

  &:invalid {
    box-shadow: none;
  }
`;

export default Input;
