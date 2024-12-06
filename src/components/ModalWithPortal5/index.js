import { Button } from "antd";
import React, { useState } from "react";
import Modal from "./Modal";

const ModalWithPortal = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div>This is a test Modal</div>
      </Modal>
    </div>
  );
};

export default ModalWithPortal;
