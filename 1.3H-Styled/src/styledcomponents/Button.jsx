import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.variant === "primary" ? "Green" : "orange"};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: DarkGreen; /* Dark Green */
  }
`;

export default Button;