import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import '../../css/search/searchBar.css';


export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    handleSubmit(event) {
        alert('Searchterm: ' + this.state.searchTerm);
        event.preventDefault();
    }

    render() {
        return (
            <Container className="searchBarContainer">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="searchBarInput">
                        <Form.Control type="text" value={this.state.value} onChange={this.handleChange}
                                      placeholder="Suche"/>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}