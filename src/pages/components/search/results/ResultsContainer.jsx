import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchResult from "./ResultItem";
import ReactDOM from "react-dom";

import '../../../css/search/searchResultsContainer.css';

export default class ResultsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.debug(this.props.data);
	}

	setIndex(index) {
		console.debug(index);
	}

	render() {

		/* FILTER THE RESULTS */
		let results = Object.assign([], this.props.data.data);

		let search = this.props.search;
		//if there is a text-search term filter the result
		if (search !== 'none') {
			results = results.filter(x => x.name.toLocaleLowerCase().includes(search.toLowerCase()));
		}

		//filter the results
		let filterList = this.props.filterList;
		console.log(results);
		for (let filter in filterList) {
			if (filterList[filter].filtered === 'true') {
				console.log(filterList[filter].type);
				results = results.filter(function (datapoint) {
					return datapoint.type !== filterList[filter].type;
				});
			}
		}


		/* RETURN THE RESULTS */

		//if there are no results display NO RESULTS
		if (results.length === 0) {
            return <div className='noResults'><h5>Keine Suchergebnisse 🕵</h5></div>;
		} else {

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
}
