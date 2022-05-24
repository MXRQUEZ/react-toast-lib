import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export interface ToastProps {
  label: string;
}

export const Toast: FC<ToastProps> = ({ label }) => {
  return (
    <Wrapper>
      <button>{label}</button>
    </Wrapper>
  );
};
