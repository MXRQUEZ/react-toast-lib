import React, { FC, memo, SVGProps } from "react";

const Svg: FC<SVGProps<SVGSVGElement>> = ({
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

export default memo(Svg);
