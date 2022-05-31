import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  width: 16px;
  height: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
