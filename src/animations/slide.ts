import { keyframes } from "styled-components";

export const slideInRight = keyframes`
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideInLeft = keyframes`
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutRight = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(110%, 0, 0);
    visibility: hidden;
  }
`;

export const slideOutLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, 0, 0);
  }
`;
