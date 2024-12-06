import React from "react";
import { createPortal } from "react-dom";
import "./styles.css";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return createPortal(
    <div className="modal-wrapper" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>close</button>
      </div>
    </div>, // Specify the portal target
    document.getElementById("modal-root")
  );
};

export default Modal;
