/**
 * Created by Wojtek on 2018-02-22.
 */
import React from 'react';


const BearItem = (props) => {
    return (
        <div className='item'>
            <div className="item__header">
                <span className='item__header--idBadge'>{props.id}</span>
                <h2>{props.name}</h2>
            </div>
            <div className="item__body">
                <div className="item__body--poster"><img src={props.image_url}/>
                </div>
            </div>
            <div className="item__footer">
                <span onClick={props.onItemClick}>details</span>
            </div>
        </div>
    )
};
export default BearItem;