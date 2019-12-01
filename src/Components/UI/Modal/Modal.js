import React, {Fragment} from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";


const Modal = props => {
  const Buttons = props.buttons.map(button => <Button
    key={props.buttons.indexOf(button)}
    type={button.type}
    onClick={button.clicked}
  >
    {button.label}
  </Button>
  );

  return (
    <Fragment>
      <Backdrop
        show={props.show}
        onClick={props.close}
      />
      <div
        className="Modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.title}</h5>
              <button className="close" onClick={props.closed}>X</button>
            </div>
            <div className="modal-body">
              <p>{props.children}</p>
            </div>
            <div className="modal-footer">
              {Buttons}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;