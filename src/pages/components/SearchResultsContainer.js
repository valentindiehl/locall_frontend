import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchResult from "./SearchResult";

import '../css/searchResultsContainer.css';

export default class SearchResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="searchResultsContainer">
                <SearchResult/>
                <SearchResult/>
                <SearchResult/>
                <SearchResult/>
            </Container>
        );
    }
}