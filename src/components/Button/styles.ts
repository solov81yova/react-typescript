import styled from "@emotion/styled";

import { colors } from "styles/colors";

interface ButtonComponentStyleProps {
  $isDeleteVariant: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentStyleProps>`
  outline: none;
  width: 100%;
  height: 70px;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;
  background-color: ${({ $isDeleteVariant, disabled }) =>
    disabled ? "grey" : $isDeleteVariant ? colors.ERROR : colors.PRIMARY_BLUE};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: rgb(61 61 116);
  }
`;
