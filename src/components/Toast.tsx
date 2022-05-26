import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Icon } from "@components/Icon";
import { Role, ToastPosition } from "@/types";
import { handleToastPosition } from "@/utils/handleToastPosition";

interface StyledToastProps {
  readonly color?: string;
  readonly backgroundColor?: string;
  readonly bold?: boolean;
  readonly fontSize?: string;
  readonly position: ToastPosition;
}

const StyledToast = styled.div<StyledToastProps>`
  position: absolute;
  display: flex;
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

const StyledSpan = styled.span`
  margin-right: 5px;
`;

export interface ToastProps extends StyledToastProps {
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
  const styles: StyledToastProps = {
    color,
    backgroundColor,
    bold,
    fontSize,
    position,
  };
  return (
    <StyledToast {...styles}>
      <Icon role={toastRole} />
      <StyledSpan>{label}</StyledSpan>
    </StyledToast>
  );
};

Toast.defaultProps = {
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  bold: false,
  fontSize: undefined,
};
