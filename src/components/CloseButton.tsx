import React, { FC } from "react";
import { Icon } from "@components/Icon";
import styled from "styled-components";

export interface CloseButtonProps {
  readonly onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  readonly color: string;
}

const StyledButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  width: 16px;
  height: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

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

export default CloseButton;
