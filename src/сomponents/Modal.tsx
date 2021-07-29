import React from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { SHOW_MODAL } from "../redux/types";
import ModalBody from "./ModalBody";

const Modal: React.FC = () => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch({ type: SHOW_MODAL });
    };

    return createPortal(
        <div className="Modal" tabIndex={-1} >
            <div className="modal-dialog" style={{ width: "15rem"}}>
                <div className="modal-content" >
                    <div className="modal-header">
                        <h5 className="modal-title">Регистрация</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={clickHandler}
                        />
                    </div>
                    <div className="modal-body">
                        <ModalBody />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={clickHandler}>
                            Закрыть
                        </button>
                        <button type="button" className="btn btn-primary" onClick={clickHandler}>
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
