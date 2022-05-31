import styled from "styled-components";
import { progress } from "animations/progress-bar/progress";
import { ProgressBarProps } from "../../types/progressBar";

export const StyledProgressBar = styled.div<ProgressBarProps>`
  height: 5px;
  border-bottom-left-radius: 0.5em;
  background: ${(props) => props.color};
  animation: ${progress};
  animation-duration: ${(props) => `${props.durationSec}s`};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-timing-function: linear;
`;
