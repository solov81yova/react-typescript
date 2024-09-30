import { ModalWrapper, ModalComponent } from "./styles";
import { ModalProps } from "./types";

function Modal({ children }: ModalProps) {
  return (
    <ModalWrapper>
      <ModalComponent>{children}</ModalComponent>
    </ModalWrapper>
  );
}

export default Modal;
