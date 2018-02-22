/**
 * Created by Wojtek on 2018-02-22.
 * */

import React from 'react';
import MoviesList from "./List/ListComponent";


export default class App extends React.Component {
    render() {
        return (
                <div>
                    <div className="movies-list ">
                        <MoviesList/>
                    </div>
                </div>

        )
    }
}
