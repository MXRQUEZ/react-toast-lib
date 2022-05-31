import React, { FC, memo } from "react";
import { defineIcon } from "utils/defineIcon";
import Svg from "./svg";
import { IconProps } from "../../types/icon";

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
