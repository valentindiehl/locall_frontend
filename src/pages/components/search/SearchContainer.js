import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchBar from "./text-search/SearchBar";
import ResultsContainer from "./results/ResultsContainer";
import FilterContainer from "./filter/FilterContainer";

import '../../css/search/searchContainer.css';


export default class SearchContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            filterList : [
                {type: "bar", filtered: "false"},
                {type: "restaurant", filtered: "false"},
                {type: "cafe", filtered: "false"},
                {type: "bakery", filtered: "false"}],
            searchTerm: 'none'
        };
        this.changeFilter = this.changeFilter.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
    }

    changeFilter(newFilter) {
        let filterCopy = this.state.filterList;
        for (let filter in filterCopy) {
            if (filterCopy[filter].type === newFilter) {
                //toggle filter
                filterCopy[filter].filtered === 'true' ? filterCopy[filter].filtered = 'false' : filterCopy[filter].filtered = 'true';
                break;
            }
        }
        this.setState( {
           filterList : filterCopy
        });
    }

    changeSearch(newSearch) {
        this.setState({
            searchTerm: newSearch
        });
    }

    render() {
        return (
            <Container className="searchContainer">
                <SearchBar onChange={this.changeSearch}/>
                <FilterContainer onChange={this.changeFilter}/>
                <ResultsContainer data={this.props.data}
                                  search={this.state.searchTerm}
                                  selection={this.props.selection}
                                  curIndex={this.props.curIndex}
                                  filterList={this.state.filterList}
                />
            </Container>
        );
    }
}