import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchBar from "./SearchBar";
import ResultsContainer from "./SearchResultsContainer";
import FilterContainer from "./FilterContainer";

import '../../css/search/searchContainer.css';


export default class SearchContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            filterList : ["bar", "restaurant", "cafe", "baecker"],
            searchTerm: 'none'
        }
        this.changeFilter = this.changeFilter.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
    }

    changeFilter(newFilter) {
        let filterList = this.state;
        filterList = filterList.filter(x => x.includes(newFilter));
        console.log("filterList");
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
                                  filter={this.state.selectedFilter}
                />
            </Container>
        );
    }
}