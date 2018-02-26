/**
 * Created by Wojtek on 2018-02-26.
 */
import React from 'react';

const BeerHint = (props) => {
    return (
        <div>
            BEERHINT COMPONENT
            <br/>
            { props.beers.map((bearEl) =>
                <li>{bearEl.name}</li>
            )}
        </div>
    )
};

export default BeerHint;





