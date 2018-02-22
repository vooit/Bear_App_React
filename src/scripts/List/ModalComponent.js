/**
 * Created by Wojtek on 2018-02-22.
 */
import React from "react";

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal__box">
                poooo {props.bearTitle}
                <span onClick={props.handleModal}>X</span>
            </div>
        </div>
    )
}

export default Modal;