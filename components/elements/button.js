import styled from "styled-components";

const Button = styled.button`
  padding: 16px 36px;
  margin: 0 36px 36px 0;
  background-color: transparent;
  color: #e6e4ec;
  overflow: visible;
  border: 1px solid rgba(238, 232, 255, 0.57);
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    background-color: #e6e0f8;
    color: #000;
  }
`;

export default Button;
