import { forwardRef, memo } from "react";
import { ProgressBarProps } from "@components/progress-bar/interfaces";
import { StyledProgressBar } from "./styled";

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (props, ref) => {
    return (
      <StyledProgressBar
        ref={ref}
        {...props}
        aria-label="notification timer"
        role="progressbar"
      />
    );
  }
);

export default memo(ProgressBar);
