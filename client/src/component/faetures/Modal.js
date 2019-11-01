import React from 'react';
import { Button } from '../styles/ButtonStyles';
import { IoIosAdd, IoMdClose } from "react-icons/io";
import { RehabModal } from '../styles/RehabCenterStyles'

const Modal = ({ handleClose, show, children }) => {
  return (
    <RehabModal show={show}>
      <section className="modal-main">
        <div>
          {children}
          <Button onClick={handleClose} SM dark>ADD ALL</Button>
        </div>
      </section>
    </RehabModal>
  );
};
export default Modal