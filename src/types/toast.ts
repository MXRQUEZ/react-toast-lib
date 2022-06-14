import { keyframes } from "styled-components";
import { MouseEvent } from "react";

export type ToastRole = "info" | "warn" | "error" | "success";

export type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";

export type ToastAnimation = "default" | "slide" | "bounce" | "flip";

export interface ToastStyles {
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  margin?: string;
  position: ToastPosition;
}

export interface StyledToastProps extends ToastStyles {
  timer: boolean;
  animation: ReturnType<typeof keyframes>;
}

export interface ToastProps extends ToastStyles {
  id?: string;
  title?: string;
  description: string;
  toastRole: ToastRole;
  closeDelayMS?: number;
  progressBarColor?: string;
  animation?: ToastAnimation;
  onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
}

export interface ProgressBarProps {
  readonly color: string;
  readonly duration: number;
}

export type IconType = ToastRole | "close";

export interface IconProps {
  readonly type: IconType;
  readonly pxSize: number;
  readonly color: string;
}

export interface CloseButtonProps {
  readonly onClose: (event: MouseEvent<HTMLButtonElement>) => void;
  readonly color: string;
}
