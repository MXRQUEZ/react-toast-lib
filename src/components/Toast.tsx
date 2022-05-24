import { FC } from "react";

interface ToastProps {
  label: string;
}

export const Toast: FC<ToastProps> = ({ label }) => {
  return (
    <button>
      {label}
    </button>
  );
};