import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchResult from "./ResultItem";
import ReactDOM from "react-dom";

import '../../../css/search/searchResultsContainer.css';

export default class ResultsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.changeSelectedBusiness = this.changeSelectedBusiness.bind(this);
	}

	changeSelectedBusiness(newBusinessID) {
		this.props.selection(newBusinessID)
	}

	render() {
		//if there are no results display NO RESULTS
		if (this.props.searchResults.length === 0) {
            return <div className='noResults'><h5>Keine Suchergebnisse 🕵</h5></div>;
		} else {

			return (
				<Container className="searchResultsContainer" id="result-container">
					{this.props.searchResults.map(datapoint => <SearchResult key={datapoint._id} id={datapoint._id}
															name={datapoint.name}
															address={datapoint.address}
															type={datapoint.type}
															onClick = {this.changeSelectedBusiness}
															index={this.props.index}
															livestream={true}/>)}
				</Container>
			);
		}
	}
}
