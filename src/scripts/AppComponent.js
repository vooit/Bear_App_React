/**
 * Created by Wojtek on 2018-02-22.
 * */

import React from 'react';
import BearsList from "./List/ListComponent";


export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className="bears-list">
                    <BearsList/>
                </div>
            </div>

        )
    }
}
