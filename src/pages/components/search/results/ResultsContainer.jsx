import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchResult from "./ResultItem";

import '../../../css/search/searchResultsContainer.css';
import EventHelper from "../../../../helpers/event-helper";

export default class ResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.changeSelectedBusiness = this.changeSelectedBusiness.bind(this);
    }

    changeSelectedBusiness(newBusinessID) {
        this.props.selection(newBusinessID)
    }

    reOrderList() {
        let reOrderedList = this.props.searchResults;
        reOrderedList.forEach((result) => {
                result.live = EventHelper().filterByBusiness(this.props.liveEvents, result._id).length > 0;
            }
        );
        return reOrderedList.sort(function (a, b) {
            return b.live - a.live
        });

    }

    render() {
        //if there are no results display NO RESULTS
        if (this.props.searchResults.length === 0) {
            return <div className='noResults'><h5>Keine Suchergebnisse 🕵</h5></div>;
        } else {
            return (
                <Container className="searchResultsContainer" id="result-container">
                    {this.reOrderList().map(datapoint => <SearchResult key={datapoint._id} id={datapoint._id}
                                                                             name={datapoint.name}
                                                                             address={datapoint.address}
                                                                             type={datapoint.type}
                                                                             onClick={this.changeSelectedBusiness}
                                                                             index={this.props.index}
                                                                             live={datapoint.live}/>)}
                </Container>
            );
        }
    }
}
