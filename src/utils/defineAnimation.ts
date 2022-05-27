import { keyframes } from "styled-components";
import { ToastAnimation, ToastPosition } from "@/types";
import {
  slideInLeft,
  slideInRight,
  slideOutLeft,
  slideOutRight,
} from "@/animations/slide";
import {
  bounceInLeft,
  bounceInRight,
  bounceOutLeft,
  bounceOutRight,
} from "@/animations/bounce";
import { fadeIn, fadeOut } from "@/animations/default";
import { flipIn, flipOut } from "@/animations/flip";

export const defineAnimation = (
  toastPosition: ToastPosition,
  animationType: ToastAnimation
): ReturnType<typeof keyframes>[] => {
  if (animationType === "default") {
    return [fadeIn, fadeOut];
  }
  if (animationType === "flip") {
    return [flipIn, flipOut];
  }

  if (toastPosition?.endsWith("right")) {
    switch (animationType) {
      case "slide":
        return [slideInRight, slideOutRight];
      case "bounce":
        return [bounceInRight, bounceOutRight];

      default:
        return [fadeIn, fadeOut];
    }
  }

  switch (animationType) {
    case "slide":
      return [slideInLeft, slideOutLeft];
    case "bounce":
      return [bounceInLeft, bounceOutLeft];

    default:
      return [];
  }
};
