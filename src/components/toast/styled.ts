import styled, { css } from "styled-components";
import { StyledToastProps } from "@components/toast/interfaces";
import { handleToastPosition } from "@/utils/handleToastPosition";

export const StyledToast = styled.div<StyledToastProps>`
  position: absolute;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  ${(props) =>
    props.timer &&
    css`
      padding-bottom: 15px;
    `}
  margin: ${(props) => props.margin || 0};
  outline: none;
  border: none;
  font-family: "Roboto Light", sans-serif;
  border-radius: 0.5em;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  ${({ position }) => handleToastPosition(position)}

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `};

  animation: ${(props) => props.animation};
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-timing-function: ease-in-out;
`;

export const StyledIconWrapper = styled.div`
  margin: 3px 10px 0 5px;
`;

export const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-right: 1.2em;
`;

export const StyledTitle = styled.span`
  font-weight: bold;
`;

export const StyledProgressBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;
