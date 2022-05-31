import { keyframes } from "styled-components";

export const progress = keyframes`
  0% {
    width: 100%;
    border-bottom-right-radius: 0.5em;
  }
  3% {
    border-bottom-right-radius: 0;
  }
  100% {
    width: 0;
  }
`;
