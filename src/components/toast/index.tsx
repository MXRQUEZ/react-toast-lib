import { FC, useCallback, useRef, useState } from "react";
import CloseButton from "@components/close-button";
import { v4 as generateToastId } from "uuid";
import ProgressBar from "@components/progress-bar";
import Icon from "@components/icon";
import { defineAnimation } from "@utils/defineAnimation";
import { useTimer } from "@hooks/useTimer";
import { StyledToastProps, ToastProps } from "src/types/toast";
import {
  StyledButtonWrapper,
  StyledIconWrapper,
  StyledProgressBarWrapper,
  StyledTextWrapper,
  StyledTitle,
  StyledToast,
} from "./styled";

export const Toast: FC<ToastProps> = ({
  id = generateToastId(),
  title,
  description,
  color = "white",
  toastRole,
  backgroundColor = "rgba(0, 0, 0, 0.7)",
  fontSize,
  position,
  margin,
  closeDelayMS,
  progressBarColor = "rgba(255, 255, 255, 0.5)",
  animation = "default",
  onClick,
}) => {
  const [isActive, setActive] = useState<boolean>(true);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleCloseCallback = useCallback(() => setActive(false), []);

  const { pauseTimer, resumeTimer } = useTimer(handleCloseCallback, closeDelayMS);

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
    timer: !!closeDelayMS,
  };

  return (
    <StyledToast
      {...styles}
      id={id || generateToastId()}
      aria-hidden={!isActive}
      aria-label="toast notification"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      onClick={onClick}
    >
      <StyledIconWrapper>
        <Icon color={color!} type={toastRole} pxSize={24} />
      </StyledIconWrapper>
      <StyledTextWrapper>
        <StyledTitle aria-label="toast title">{title}</StyledTitle>
        <span aria-label="notification description">{description}</span>
      </StyledTextWrapper>
      <StyledButtonWrapper>
        <CloseButton onClose={handleCloseCallback} color={color!} />
      </StyledButtonWrapper>
      {closeDelayMS && (
        <StyledProgressBarWrapper>
          <ProgressBar ref={progressBarRef} color={progressBarColor!} duration={closeDelayMS} />
        </StyledProgressBarWrapper>
      )}
    </StyledToast>
  );
};
