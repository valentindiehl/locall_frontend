import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchResult from "./ResultItem";
import ReactDOM from "react-dom";

import '../../../css/search/searchResultsContainer.css';

export default class ResultsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {selectedBusinessID : 0};
		this.changeSelectedBusiness = this.changeSelectedBusiness.bind(this);
	}

	componentDidMount() {
		console.debug(this.props.data);
	}

	changeSelectedBusiness(newBusinessID) {
		this.setState({
			selectedBusinessID: newBusinessID
		});
		this.props.selection(newBusinessID)
	}

	render() {
		/* RETURN THE RESULTS */

		//if there are no results display NO RESULTS
		if (this.props.searchResults.length === 0) {
            return <div className='noResults'><h5>Keine Suchergebnisse 🕵</h5></div>;
		} else {

			return (
				<Container className="searchResultsContainer" id="result-container">
					{this.props.searchResults.map(datapoint => <SearchResult key={datapoint.id} id={datapoint.id}
															name={datapoint.name}
															address={datapoint.address}
															type={datapoint.type}
															curIndex={this.props.curIndex}
															selection={this.props.selection}/>)}
				</Container>
			);
		}
	}
}
