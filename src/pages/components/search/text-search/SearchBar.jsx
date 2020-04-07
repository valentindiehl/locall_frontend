import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import '../../../css/search/searchBar.css';


export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {searchTerm: ''};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let value = event.target.value;
		this.setState({searchTerm: value});
		this.props.onChange(value);
	}

	render() {
		return (
			<Container className="searchBarContainer">
				<Form>
					<Form.Group controlId="searchBarInput">
						<Form.Control type="text" value={this.state.value} onChange={this.handleChange}
									  placeholder="SUCHE"/>
					</Form.Group>
				</Form>
			</Container>
		);
	}
}
