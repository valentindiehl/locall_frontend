import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import '../../css/search/searchResult.css';


export default class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="searchResultHolder">
                <Row className="searchResultRow">
                    <Col>
                        <h5>Café Lola</h5>
                        <p>Marktplatz 11</p>
                    </Col>
                    <Col>
                        <img width="25px" src="/assets/icons/cafeBlue.svg" alt={"Restaurant-Icon"}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}