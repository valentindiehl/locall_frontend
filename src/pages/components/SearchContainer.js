import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchBar from "./SearchBar";
import ResultsContainer from "./SearchResultsContainer";
import FilterContainer from "./FilterContainer";

import '../css/searchContainer.css';


export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="searchContainer">
                <SearchBar/>
                <FilterContainer/>
                <ResultsContainer/>
            </Container>
        );
    }
}