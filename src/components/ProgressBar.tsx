import React from "react";
import styled, { keyframes } from "styled-components";

const progressAnimation = keyframes`
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

interface ProgressBarProps {
  readonly color: string;
  readonly durationSec: number;
}

const StyledProgressBar = styled.div<ProgressBarProps>`
  height: 5px;
  border-bottom-left-radius: 0.5em;
  background: ${(props) => props.color};
  animation: ${progressAnimation};
  animation-duration: ${(props) => `${props.durationSec}s`};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-timing-function: linear;
`;

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (props, ref) => {
    return (
      <StyledProgressBar
        ref={ref}
        {...props}
        aria-label="notification timer"
        role="progressbar"
      />
    );
  }
);
