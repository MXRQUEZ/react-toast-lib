import { keyframes } from "styled-components";
import { MouseEvent } from "react";
import { Role, ToastAnimation, ToastPosition } from "@/types";

export interface ToastStyles {
  readonly color?: string;
  readonly backgroundColor?: string;
  readonly fontSize?: string;
  readonly margin?: string;
  readonly position: ToastPosition;
}

export interface StyledToastProps extends ToastStyles {
  readonly timer: boolean;
  readonly animation: ReturnType<typeof keyframes>;
}

export interface ToastProps extends ToastStyles {
  readonly id?: string;
  readonly title?: string;
  readonly description: string;
  readonly toastRole: Role;
  readonly closeTimerSec?: number;
  readonly progressBarColor?: string;
  readonly animation?: ToastAnimation;
  readonly onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
}
