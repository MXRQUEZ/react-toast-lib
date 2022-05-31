import { ToastRole } from "./toast";

export type IconType = ToastRole | "close";

export interface IconProps {
  readonly type: IconType;
  readonly pxSize: number;
  readonly color: string;
}
