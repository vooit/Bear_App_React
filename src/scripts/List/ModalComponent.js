/**
 * Created by Wojtek on 2018-02-22.
 */
import React from "react";

const Modal = (props) => {
    let modalClassName = "modal-container " + (props.showModal ? "showIn" : "showIn showout");

    let foodData = [props.beer && props.beer.food_pairing];

    // let newArr = [];
    // for (let i = 0; i < foodData.length; i++) {
    //     console.log(foodData[i])
    //     newArr.push(foodData[i])
    // }
    // console.log('length of old array is ' + foodData.length);
    // console.log('length of new made arr is ' + newArr.length)
    // console.log(foodData[0]);
    const listItems = foodData.map((element) =>
        <li>{element}</li>
    );

    return (
        <div className={modalClassName}>
            <div className="modal-background">
                <div className="modal single-bear">
                    <div className="info-wrapper">
                        <div className="single-bear__image">
                            <img src={props.beer && props.beer.image_url}/>
                        </div>
                        <div className="single-bear__copy">
                            <h3>{props.modalText}</h3>
                            <h3>{props.beer && props.beer.name}</h3>
                            <h3>{props.beer && props.beer.tagline}</h3>
                            <h3>{props.beer && props.beer.description}</h3>

                            <div className="single-bear__copy--numeric">
                                <p><strong>IBU</strong> <span>{props.beer && props.beer.ibu}</span></p>
                                <p><strong>ABV</strong> <span>{props.beer && props.beer.abv}</span></p>
                                <p><strong>EBC</strong> <span>{props.beer && props.beer.ebc}</span></p>
                            </div>
                            <ul className="single-bear__food">{listItems}</ul>
                        </div>
                    </div>


                    <span className="single-bear__exit" onClick={props.onCloseClick}>X</span>
                </div>
            </div>
        </div>
    )
}

export default Modal;
