/**
 * Created by Wojtek on 2018-02-22.
 */
import React from "react";

const Modal = (props) => {
    let modalClassName = "modal-container " + (props.showModal ? "showIn" : "showIn showOut");


    // console.log(props.beers);
    let foodData = [props.beer && props.beer.food_pairing];

    let data = props.beer && props.beer.food_pairing;
    //    let listItems = props.beer && props.beer.food_pairing.map((element) =>
    const listItems = foodData.map((element, index) =>
        <li key={index}>{element}</li>
    );
    const getIbu = props.beer && props.beer.ibu;
    console.log(getIbu);
    let highIbu = getIbu + 15;
    console.log(highIbu);
    let lowIbu = getIbu - 15;
    console.log(lowIbu);
    //---  ---  ---  ---  --- --- ---  ---//
    return (
        <div className={modalClassName}>
            <div className="modal-background">
                <div className="modal single-bear">
                    <div className="info-wrapper">
                        <div className="single-bear__image">
                            <img src={props.beer && props.beer.image_url}/>
                        </div>
                        <div className="single-bear__copy">
                            <h2 className="gradient-text">{props.beer && props.beer.name}</h2>
                            <h3>{props.beer && props.beer.tagline}</h3>
                            <p>{props.beer && props.beer.description}</p>
                            <div className="single-bear__copy--numeric no-gutters">
                                <div><strong>IBU</strong>
                                    <span>{props.beer && props.beer.ibu}</span></div>
                                <div><strong>ABV</strong>
                                    <span>{props.beer && props.beer.abv}</span></div>
                                <div><strong>EBC</strong>
                                    <span>{props.beer && props.beer.ebc}</span></div>
                            </div>
                            <ul className="single-bear__food no-gutters">{props.beer && props.beer.brewers_tips}</ul>
                        </div>
                    </div>
                    <hr/>

                    <div>
                        <h3 className="no-gutters">
                            You may also like (with similar ibu factor):
                        </h3>
                        <div className="beers-hint no-gutters">
                            {props.beers.slice(0,6).map(bearEl => {
                                    if ((bearEl.ibu < highIbu ) && (bearEl.ibu > lowIbu)) {
                                        return (
                                            <div className="beer-hint__item">
                                                <img src={bearEl.image_url}
                                                     className="beer-hint__item--img"/>
                                                <h3 className="beer-hint__item--name">{bearEl.name}</h3>
                                                <p>{bearEl.ibu}</p>
                                            </div>
                                        )
                                    }
                                }
                            )}
                        </div>
                    </div>
                    <span className="single-bear__exit" onClick={props.onCloseClick}>X</span>
                </div>
            </div>
        </div>
    )
};

export default Modal;


