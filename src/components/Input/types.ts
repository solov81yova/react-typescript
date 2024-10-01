import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  disabled?: boolean;
  error?: undefined | string;
  value?: string;
  onChange?: any;
}
