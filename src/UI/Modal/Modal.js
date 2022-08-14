import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.hideCart} className={classes.backdrop}></div>;
};

const Popup = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return createPortal(
    <div>
      <Backdrop hideCart ={props.hideCart} />
      <Popup>{props.children}</Popup>
    </div>,
    document.getElementById("popupModal")
  );
};

export default Modal;
