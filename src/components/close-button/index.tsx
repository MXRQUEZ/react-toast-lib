import React, { FC, memo } from "react";
import Icon from "components/icon";
import { StyledButton } from "./styled";
import { CloseButtonProps } from "../../types/closeButton";

const CloseButton: FC<CloseButtonProps> = ({ onClose, color }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClose(event);
  };

  return (
    <StyledButton type="reset" onClick={handleClick} aria-label="close">
      <Icon color={color} type="close" pxSize={13} />
    </StyledButton>
  );
};

export default memo(CloseButton);
