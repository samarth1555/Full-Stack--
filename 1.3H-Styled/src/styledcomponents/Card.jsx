import styled from "styled-components";
const Card = styled.div`
  background-color: ${props => props.variant === "primary" ? "#2f85d1" : "#fff0f5"};
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
`;
export default Card;