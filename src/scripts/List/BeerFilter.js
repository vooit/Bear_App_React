/**
 * Created by Wojtek on 2018-02-27.
 */
/**
 * Created by Wojtek on 2018-02-16.
 */
import React from 'react';
import PropTypes from 'prop-types';

const BeerFilters = (props) => {
    return (
        <form>
            <input type="text" value={props.filter} onChange={props.onFilterChange} placeholder="Find your beer dude..." />
        </form>
    );
};

BeerFilters.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
};

export default BeerFilters;