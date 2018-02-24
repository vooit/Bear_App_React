/**
 *  Created by Wojtek on 2018-02-22.
 */
import React from 'react';
import Loader from './LoaderComponent';
import BearItem from './BearItemComponent';
import Modal from  './ModalComponent';


export default class BearsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bears: [],
            beer: undefined,
            showModal: false
        };
        // this.onPaginatedSearch = this.onPaginatedSearch.bind(this)
    }
    //get url
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
    //fetch data
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);


        this.getBears()
            .then((Response) => Response.json())
            .then((bears) => {
                console.log(bears);
                this.setState({
                    bears
                });
            })
            .catch(function (err) {
                console.log(err);
            })
    }
    //event on scroll
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }
    //on scroll function passed to lifecycle
    onScroll(){
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) // if reches the BOTTOM

        ) {
            this.onPaginatedSearch();
        }
    }
    //if scrolled FETCH FUCKING DATA
    onPaginatedSearch() {
        console.log('scrolled');
    }

    // toggle modal
    handleModal(beer) {
        console.log(beer.id, beer.name);
        this.setState({
            showModal: !this.state.showModal,
            beer
        })
    }

    render() {

        const modalText = "passed text from parent";


        const {bears} = this.state;
        //LOADER//
        if (!bears.length) {
            return <Loader />
        }

        return (
            <div>
                <div className="items-wrapper container">
                    { this.state.bears.map((bearEl, index) =>
                        <BearItem {...bearEl}
                                  key={index}
                                  onItemClick={this.handleModal.bind(this, bearEl)}/>
                    )}
                </div>
                <Modal modalText={modalText}
                       showModal={this.state.showModal}
                       onCloseClick={this.handleModal.bind(this)}
                       beer={this.state.beer}/>
            </div>

        )
    }
}