import React, { FC } from "react";
import styled from "styled-components";
import { Role } from "@/types";
import { defineToastIcon } from "@/utils/defineToastIcon";

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
  readonly role: Role;
  readonly pxSize?: number;
  readonly color: string;
}

const StyledIcon = styled.i`
  margin: 3px 10px 0 5px;
`;

export const Icon: FC<IconProps> = ({ role, pxSize, color }) => {
  const icon = defineToastIcon(role);
  return (
    <StyledIcon>
      <Svg height={pxSize} width={pxSize} fill={color}>
        {icon}
      </Svg>
    </StyledIcon>
  );
};

Icon.defaultProps = {
  pxSize: 24,
};
