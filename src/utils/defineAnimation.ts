import { keyframes } from "styled-components";
import { slideInLeft, slideInRight, slideOutLeft, slideOutRight } from "@animations/toast/slide";
import { bounceInLeft, bounceInRight, bounceOutLeft, bounceOutRight } from "@animations/toast/bounce";
import { fadeIn, fadeOut } from "@animations/toast/fade";
import { flipIn, flipOut } from "@animations/toast/flip";
import { ToastAnimation, ToastPosition } from "../types/toast";

export const defineAnimation = (
  toastPosition: ToastPosition,
  animationType: ToastAnimation
  // eslint-disable-next-line consistent-return
): ReturnType<typeof keyframes>[] => {
  switch (animationType) {
    case "slide":
      if (toastPosition?.endsWith("right")) {
        return [slideInRight, slideOutRight];
      }
      return [slideInLeft, slideOutLeft];
    case "bounce":
      if (toastPosition?.endsWith("right")) {
        return [bounceInRight, bounceOutRight];
      }
      return [bounceInLeft, bounceOutLeft];

    case "flip":
      return [flipIn, flipOut];

    case "default":
      return [fadeIn, fadeOut];
  }
};
