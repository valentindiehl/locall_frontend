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
            searchTerm: 'none',
            searchResults : this.props.data
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
        this.filterResult();
    }

    changeSearch(newSearch) {
        this.setState({
            searchTerm: newSearch
        });
        this.filterResult();
    }

    filterResult() {
        /* FILTER THE RESULTS */
        let results = Object.assign([], this.props.data);

        //if there is a text-search term filter the result
        if (this.state.searchTerm !== 'none') {
            results = results.filter(x => x.name.toLocaleLowerCase().includes(this.state.searchTerm.toLowerCase()));
        }

        //filter the results
        let filterList = this.state.filterList;
        console.log(results);
        for (let filter in filterList) {
            if (filterList[filter].filtered === 'true') {
                console.log(filterList[filter].type);
                results = results.filter(function (datapoint) {
                    return datapoint.type !== filterList[filter].type;
                });
            }
        }

        this.setState({
            searchResults: results
        });

        this.props.searchResults(results);
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
                                  searchResults={this.state.searchResults}
                />
            </Container>
        );
    }
}