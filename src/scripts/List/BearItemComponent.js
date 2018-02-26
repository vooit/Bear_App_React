/**
 * Created by Wojtek on 2018-02-22.
 */
import React from 'react';


const BearItem = (props) => {
    return (
        <div className='item' onClick={props.onItemClick}>
            <div className="item__header">
                <span className='item__header--idBadge'>{props.id}</span>
                <div className="item__body--poster"><img src={props.image_url}/>
                </div>
            </div>
            <div className="item__body">
                <h2>{props.name}</h2>
                <h4>{props.tagline}</h4>
            </div>
        </div>
    )
};
export default BearItem;