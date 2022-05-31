import React, { FC, memo } from "react";
import { IconProps } from "@components/icon/interfaces";
import { defineIcon } from "@/utils/defineIcon";
import Svg from "./svg";

const Icon: FC<IconProps> = ({ type, pxSize, color }) => {
  const icon = defineIcon(type);
  return (
    <i>
      <Svg height={pxSize} width={pxSize} fill={color}>
        {icon}
      </Svg>
    </i>
  );
};

export default memo(Icon);
