import styled from 'styled-components';

const Button = styled.button`
  height: 5rem;
  width: 100%;
  padding: 0.25rem 1.75rem;
  margin-top: 1rem;
  font-size: 2rem;
  background-color: red;
  color: white;
  font-family: 'Work Sans', monospace;
  border: 1px solid white;
  transition: linear 0.05s;

  &:hover {
    transform: skew(-14deg, 0deg);
    transition: linear 0.05s;
    border: 1px solid red;
  }

  &:active {
    background-color: white;
    color: red;
    border: 1px solid red;
    transition: linear 0.05s;
  }
`;

export default Button;
