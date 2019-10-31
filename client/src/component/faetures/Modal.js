import React from 'react';
import { Button } from '../styles/ButtonStyles';
import { IoIosAdd,IoMdClose } from "react-icons/io";
import {RehabModal} from '../styles/RehabCenterStyles'

 const Modal = ({ handleClose, show, children }) => {
    return (
      <RehabModal show={show}>
        <section className="modal-main">
          {children}
          <Button onClick={handleClose} SM dark>Close</Button>
        </section>
      </RehabModal>
    );
  };
  export default Modal