import { ModalProps } from "./types";

import "./styles.css";

function Modal({ children }: ModalProps) {
  return (
    <div className="modal-wrapper">
      <div className="modal-component">{children}</div>
    </div>
  );
}

export default Modal;
