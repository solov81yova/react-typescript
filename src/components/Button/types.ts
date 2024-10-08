import { MouseEvent } from "react";

export type ButtonTypes = "submit" | "reset" | "button" | undefined;

export interface ButtonProps {
  type?: ButtonTypes;
  name: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isDeleteVariant?: boolean;
  disabled?: boolean;
}
