/**
 * Created by Wojtek on 2018-02-22.
 */
import React from "react";

const Modal = (props) => {
    return (

        //<div className={props.showModal
        //? "modal-container showIn"
        //: "modal-container showIn showOut"}>
        <div className="modal-container showIn ">
            <div className="modal-background">
                <div className="modal">
                    <h2>I'm a Modal</h2>

                    <h3>{props.modalText}</h3>
                    <span onClick={props.handleModal}>X</span>
                </div>
            </div>
        </div>

    )
}

export default Modal;


