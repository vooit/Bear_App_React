/**
 *  Created by Wojtek on 2018-02-22.
 */
import React from 'react';
import LoaderWars from './LoaderComponent';
import BearItem from './BearItemComponent';
import Modal from  './ModalComponent';


export default class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            showModal: false
        };
    }

    getBears() {
        return fetch('https://api.punkapi.com/v2/beers', {
            method: 'get',
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }
        })
    }

    componentDidMount() {
        this.getBears()
            .then((Response) => Response.json())
            .then((movies) => {
                console.log(movies);
                this.setState({
                    movies
                });
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    handleModal(id) {
        console.log('poooo');
        console.log(id);
        this.setState({
            showModal: !this.state.showModal
        })
    }


    // getBearUrl(id) {
    //     return `https://api.punkapi.com/v2/beers/${id}`;
    // }
    //
    // getBearData(id, rating) {
    //     fetch(this.getBearUrl(id), {
    //         method: 'get',
    //         dataType: 'json',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Cache-Control': 'no-cache'
    //         }
    //     }).then(response => response.json())
    //         .then(ratings => {
    //             this.setState({
    //                 ratings
    //             })
    //         })
    //         .catch(function (err) {
    //             console.log(err, 'rating not defined');
    //         })
    // }


    //------------------------------------------------------

    render() {
        const {movies} = this.state;
        //LOADER//
        if (!movies.length) {
            return <LoaderWars />
        }

        return (
            <div>
                {this.state.showModal ?
                    <Modal  handleModal={this.handleModal.bind(this)}/> : null

                }
                <div className="items-wrapper container">
                    { this.state.movies.map((bearEl, index) =>
                        <BearItem {...bearEl} key={index}
                                  bearId={bearEl.id}
                                  handleModal={this.handleModal.bind(this)}
                        />
                    )}
                </div>
            </div>
        )
    }
}