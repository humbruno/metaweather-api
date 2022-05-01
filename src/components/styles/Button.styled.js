import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;

  padding: 10px 20px;
  border: 0;
  border-radius: 8px;

  background-color: ${(props) => props.bg || "#6e707a"};
  color: #e7e7eb;

  font-weight: 700;
  letter-spacing: 1px;

  transition: all 150ms ease-in-out;

  &:hover {
    color: #6e707a;
    background-color: #e7e7eb;
  }
`;
