import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchResult from "./SearchResult";
import ReactDOM from "react-dom";

import '../../css/search/searchResultsContainer.css';

export default class SearchResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        const Test = ({data}) => (
            <div>
                {data.map(data => (
                    <div className="station" key={data.id}>{data.name}</div>
                ))}
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props.data);
    }

    setIndex(index) {
        console.log(index);
    }

    render() {
        let results = this.props.data.data;
        let filter = this.props.filter;
        
        //if there is a filter active filter the results
        if (this.props.filter !== 'none') {
            results = results.filter(function(datapoint){
                return datapoint.type === filter});
        }
            return (
                <Container className="searchResultsContainer" id="result-container">
                    {results.map(datapoint => <SearchResult key={datapoint.id} id={datapoint.id}
                                                                         name={datapoint.name}
                                                                         address={datapoint.address}
                                                                         type={datapoint.type}
                                                                         curIndex={this.props.curIndex}
                                                                         selection={this.props.selection}/>)}
                </Container>
            );
        }
}