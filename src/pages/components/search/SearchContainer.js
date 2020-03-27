import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchBar from "./SearchBar";
import ResultsContainer from "./SearchResultsContainer";
import FilterContainer from "./FilterContainer";

import '../../css/search/searchContainer.css';


export default class SearchContainer extends Component {

    render() {
        return (
            <Container className="searchContainer">
                <SearchBar/>
                <FilterContainer/>
                <ResultsContainer data={this.props.data} selection={this.props.selection}
                                  curIndex={this.props.curIndex}/>
            </Container>
        );
    }
}