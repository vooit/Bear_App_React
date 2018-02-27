/**
 * Created by Wojtek on 2018-02-27.
 */

import React from 'react';

const BeerFilter = (props) => {
    return (
        <form className="search-form">
            <input type="text"  value={props.filter} onChange={props.onFilterChange} placeholder="Find your dog dude..." />
        </form>
    );
};

export default BeerFilter;