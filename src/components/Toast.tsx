import React, { FC, useState } from "react";
import styled, { css } from "styled-components";
import { Icon } from "@components/Icon";
import CloseButton from "@components/CloseButton";
import { Role, ToastPosition } from "@/types";
import { handleToastPosition } from "@/utils/handleToastPosition";

interface StyledToastProps extends ToastStyles {
  readonly display: "none" | "flex";
}

interface ToastStyles {
  readonly color?: string;
  readonly backgroundColor?: string;
  readonly bold?: boolean;
  readonly fontSize?: string;
  readonly position: ToastPosition;
}

const StyledToast = styled.div<StyledToastProps>`
  position: absolute;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  padding: 10px;
  outline: none;
  border: none;
  font-family: "Roboto Light", sans-serif;
  border-radius: 0.5em;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  ${({ position }) => handleToastPosition(position)}

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}
`;

const StyledIconWrapper = styled.div`
  margin: 3px 10px 0 5px;
`;

const StyledSpan = styled.span`
  margin-right: 1.2em;
`;

const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export interface ToastProps extends ToastStyles {
  readonly label: string;
  readonly toastRole: Role;
}

export const Toast: FC<ToastProps> = ({
  label,
  color,
  toastRole,
  backgroundColor,
  bold,
  fontSize,
  position,
}) => {
  const [isActive, setActive] = useState(true);
  const handleClose = () => {
    setActive(false);
  };

  const styles: StyledToastProps = {
    color,
    backgroundColor,
    bold,
    fontSize,
    position,
    display: isActive ? "flex" : "none",
  };

  return (
    <StyledToast {...styles}>
      <StyledIconWrapper>
        <Icon color={color || "white"} type={toastRole} />
      </StyledIconWrapper>
      <StyledSpan>{label}</StyledSpan>
      <StyledButtonWrapper>
        <CloseButton onClose={handleClose} color={color || "white"} />
      </StyledButtonWrapper>
    </StyledToast>
  );
};

Toast.defaultProps = {
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  bold: false,
  fontSize: undefined,
};
