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
                        <h5>{this.props.name}</h5>
                        <p>{this.props.address}</p>
                    </Col>
                    <Col>
                        {this.props.type == "restaurant" ?
                            <img width="25px" src="/assets/icons/restaurant_green.svg" alt={"Restaurant-Icon"}/>
                            : this.props.type == "bar" ?
                            <img width="25px" src="/assets/icons/cocktail_red.svg" alt={"Restaurant-Icon"}/>
                            :
                            <img width="25px" src="/assets/icons/cafeBlue.svg" alt={"Restaurant-Icon"}/>
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}