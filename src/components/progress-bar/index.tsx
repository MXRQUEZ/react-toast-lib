import { forwardRef, memo } from "react";
import { StyledProgressBar } from "./styled";
import { ProgressBarProps } from "../../types/progressBar";

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
