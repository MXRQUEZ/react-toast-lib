import React, { FC, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Icon } from "@components/Icon";
import CloseButton from "@components/CloseButton";
import { ProgressBar } from "@components/ProgressBar";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { Role, ToastAnimation, ToastPosition } from "@/types";
import { handleToastPosition } from "@/utils/handleToastPosition";
import { defineAnimation } from "@/utils/defineAnimation";
import { generateToastId } from "@/utils/generateToastId";
import { useTimer } from "@/hooks/useTimer";

interface ToastStyles {
  readonly color?: string;
  readonly backgroundColor?: string;
  readonly fontSize?: string;
  readonly margin?: string;
  readonly position: ToastPosition;
}

interface StyledToastProps extends ToastStyles {
  readonly timer: boolean;
  readonly animation: ReturnType<typeof keyframes>;
}

const StyledToast = styled.div<StyledToastProps>`
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

const StyledIconWrapper = styled.div`
  margin: 3px 10px 0 5px;
`;

const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-right: 1.2em;
`;

const StyledTitle = styled.span`
  font-weight: bold;
`;

const StyledProgressBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export interface ToastProps extends ToastStyles {
  readonly id?: string;
  readonly title?: string;
  readonly description: string;
  readonly toastRole: Role;
  readonly closeTimerSec?: number;
  readonly progressBarColor?: string;
  readonly animation?: ToastAnimation;
}

export const Toast: FC<ToastProps> = ({
  id,
  title,
  description,
  color,
  toastRole,
  backgroundColor,
  fontSize,
  position,
  margin,
  closeTimerSec,
  progressBarColor,
  animation,
}) => {
  const [isActive, setActive] = useState<boolean>(true);
  const handleClose = (): void => setActive(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [pauseTimer, resumeTimer] = useTimer(handleClose, closeTimerSec);

  const handleMouseEnter = () => {
    if (progressBarRef.current) {
      progressBarRef.current.style.animationPlayState = "paused";
      pauseTimer();
    }
  };

  const handleMouseLeave = () => {
    if (progressBarRef.current) {
      progressBarRef.current.style.animationPlayState = "running";
      resumeTimer();
    }
  };

  const [animationIn, animationOut] = defineAnimation(position, animation!);
  const styles: StyledToastProps = {
    color,
    backgroundColor,
    fontSize,
    position,
    margin,
    animation: isActive ? animationIn : animationOut,
    timer: !!closeTimerSec,
  };

  return (
    <ErrorBoundary>
      <StyledToast
        {...styles}
        id={id || generateToastId()}
        aria-hidden={!isActive}
        aria-label="toast notification"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <StyledIconWrapper>
          <Icon color={color!} type={toastRole} />
        </StyledIconWrapper>
        <StyledTextWrapper>
          <StyledTitle aria-label="toast title">{title}</StyledTitle>
          <span aria-label="notification description">{description}</span>
        </StyledTextWrapper>
        <StyledButtonWrapper>
          <CloseButton onClose={handleClose} color={color!} />
        </StyledButtonWrapper>
        {closeTimerSec && (
          <StyledProgressBarWrapper>
            <ProgressBar
              ref={progressBarRef}
              color={progressBarColor!}
              durationSec={closeTimerSec}
            />
          </StyledProgressBarWrapper>
        )}
      </StyledToast>
    </ErrorBoundary>
  );
};

Toast.defaultProps = {
  id: undefined,
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  fontSize: undefined,
  margin: undefined,
  title: undefined,
  closeTimerSec: undefined,
  progressBarColor: "rgba(255, 255, 255, 0.5)",
  animation: "default",
};
