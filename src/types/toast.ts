import { keyframes } from "styled-components";
import { MouseEvent } from "react";

export type ToastRole = "info" | "warn" | "error" | "success";

export type ToastPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

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
  closeTimerSec?: number;
  progressBarColor?: string;
  animation?: ToastAnimation;
  onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
}
