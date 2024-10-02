import { HTMLInputTypeAttribute, ChangeEvent } from "react";

export interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  disabled?: boolean;
  error?: undefined | string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
