import React, { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Icon } from "@components/Icon";
import CloseButton from "@components/CloseButton";
import { ProgressBar } from "@components/ProgressBar";
import { Role, ToastPosition } from "@/types";
import { handleToastPosition } from "@/utils/handleToastPosition";

interface ToastStyles {
  readonly color?: string;
  readonly backgroundColor?: string;
  readonly fontSize?: string;
  readonly margin?: string;
  readonly position: ToastPosition;
}

interface StyledToastProps extends ToastStyles {
  readonly display: "none" | "flex";
  readonly timer: boolean;
}

const StyledToast = styled.div<StyledToastProps>`
  position: absolute;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  padding: 10px;
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
    `}
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
  readonly title?: string;
  readonly description: string;
  readonly toastRole: Role;
  readonly timerSec?: number;
  readonly timerColor?: string;
}

export const Toast: FC<ToastProps> = ({
  title,
  description,
  color,
  toastRole,
  backgroundColor,
  fontSize,
  position,
  margin,
  timerSec,
  timerColor,
}) => {
  const [isActive, setActive] = useState<boolean>(true);
  const handleClose = (): void => setActive(false);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (timerSec) {
      timerId = setTimeout(handleClose, timerSec * 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [timerSec]);

  const styles: StyledToastProps = {
    color,
    backgroundColor,
    fontSize,
    position,
    margin,
    display: isActive ? "flex" : "none",
    timer: !!timerSec,
  };

  return (
    <StyledToast
      {...styles}
      aria-hidden={!isActive}
      aria-label="toast notification"
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
      {timerSec && (
        <StyledProgressBarWrapper>
          <ProgressBar color={timerColor!} durationSec={timerSec} />
        </StyledProgressBarWrapper>
      )}
    </StyledToast>
  );
};

Toast.defaultProps = {
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  fontSize: undefined,
  margin: undefined,
  title: undefined,
  timerSec: undefined,
  timerColor: "rgba(255, 255, 255, 0.5)",
};
