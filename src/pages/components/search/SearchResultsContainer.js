import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchResult from "./SearchResult";
import  ReactDOM  from "react-dom";

import '../../css/search/searchResultsContainer.css';

export default class SearchResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        const Test = ({ data }) => (
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
        return (
            <Container className="searchResultsContainer" id="result-container">
                { this.props.data.data.map(datapoint => <SearchResult key={datapoint.id} id={datapoint.id} name={datapoint.name} address={datapoint.address} type={datapoint.type} curIndex={this.props.curIndex} selection={this.props.selection} />)}
            </Container>
        );
    }
}