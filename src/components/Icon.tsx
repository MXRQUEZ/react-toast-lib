import React, { FC } from "react";
import { IconType } from "@/types";
import { defineIcon } from "@/utils/defineIcon";

const Svg: FC<React.SVGProps<SVGSVGElement>> = ({
  height,
  width,
  fill,
  children,
}) => {
  return (
    <svg
      height={height}
      width={width}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      {children}
    </svg>
  );
};

interface IconProps {
  readonly type: IconType;
  readonly pxSize?: number;
  readonly color: string;
}

export const Icon: FC<IconProps> = ({ type, pxSize, color }) => {
  const icon = defineIcon(type);
  return (
    <i>
      <Svg height={pxSize} width={pxSize} fill={color}>
        {icon}
      </Svg>
    </i>
  );
};

Icon.defaultProps = {
  pxSize: 24,
};
