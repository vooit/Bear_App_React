/**
 * Created by Wojtek on 2018-02-22.
 */
import React from "react";

const Modal = (props) => {
    let modalClassName = "modal-container " + (props.showModal ? "showIn" : "showIn showout");
console.log(props)
    return (
        <div className={modalClassName}>
            <div className="modal-background">
                <div className="modal">
                    <h2>I'm a Modal</h2>

                    <h3>{props.modalText}</h3>
                    <h3>{props.beer && props.beer.name}</h3>
                    <span onClick={props.onCloseClick}>X</span>
                </div>
            </div>
        </div>
    )
}

export default Modal;
