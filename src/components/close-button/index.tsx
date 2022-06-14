import { FC, memo, MouseEvent } from "react";
import Icon from "@components/icon";
import { CloseButtonProps } from "src/types/toast";
import { StyledButton } from "./styled";

const CloseButton: FC<CloseButtonProps> = ({ onClose, color }) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClose(event);
  };

  return (
    <StyledButton onClick={handleClick} aria-label="close">
      <Icon color={color} type="close" pxSize={13} />
    </StyledButton>
  );
};

export default memo(CloseButton);
