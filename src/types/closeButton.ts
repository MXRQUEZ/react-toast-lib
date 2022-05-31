import { MouseEvent } from "react";

export interface CloseButtonProps {
  readonly onClose: (event: MouseEvent<HTMLButtonElement>) => void;
  readonly color: string;
}
