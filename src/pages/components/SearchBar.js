import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import '../css/searchBar.css';


export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="searchBarContainer">
                <Form>
                    <Form.Group controlId="searchBarInput">
                        <Form.Control type="text" placeholder="Suche"/>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}