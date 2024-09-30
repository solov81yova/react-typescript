import styled from "@emotion/styled";

interface InputComponentStyleProps {
  disabled?: boolean;
  $error?: undefined | string;
  
}
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputComponentStyleProps>`
  width: 100%;
  height: 50px;
  border: ${({$error}) => $error ? '1px solid red' : '1px solid #3f3f3f'} ;
  border-radius: 4px;
  padding: 12px;
  outline: none;
  background-color:${({disabled }) =>
    disabled
      ? "grey"
      : "white"}; ;
`;

export const InputComponentForPlaceholder = styled.div`
  color: #6f6f6f;
  font-size: 16px;
`;
//оставленн комментарий для себя, чтобы понимать к чему был применен этот стиль
// .input-component::placeholder {
//color: #6f6f6f;
//font-size: 16px;
// }
