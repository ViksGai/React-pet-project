import { Fragment } from "react";
import ReactDOM from "react-dom";
import b from 'b_';

import "./modal.scss";

const Backdrop = (props:any) => {
  return <div className={b('backdrop')} onClick={props.onClose}></div>;
};

const ModalOverlay = (props: any) => {
  return <div className={b('modal')}>
    <div className={b('modal', 'content')}>{props.children}</div>
  </div>;
};

const portalElement = document.getElementById("overlays");

export const Modal = (props: any) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement as HTMLElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement as HTMLElement
      )}
    </Fragment>
  );
};
