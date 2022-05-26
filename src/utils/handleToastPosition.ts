import { css, SimpleInterpolation } from "styled-components";
import { ToastPosition } from "@/types";

export const handleToastPosition = (
  position: ToastPosition
): SimpleInterpolation => {
  switch (position) {
    case "bottom-right":
      return css`
        bottom: 20px;
        right: 20px;
      `;

    case "bottom-left":
      return css`
        bottom: 20px;
        left: 20px;
      `;

    case "top-left":
      return css`
        top: 20px;
        left: 20px;
      `;

    case "top-right":
      return css`
        top: 20px;
        right: 20px;
      `;

    default:
      return css`
        bottom: 20px;
        right: 20px;
      `;
  }
};
