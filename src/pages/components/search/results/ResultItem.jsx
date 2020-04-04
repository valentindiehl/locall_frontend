import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import '../../../css/search/searchResult.css';


export default class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    test = (id) => {
        this.props.selection(this.props.id);
    }

    render() {
        return (
            <Container className="searchResultHolder">
                <Row className="searchResultRow" onClick={this.test.bind(this, this.props.id)}>
                    <Col sm={10}>
                        <h5>{this.props.name}</h5>
                        <p>{this.props.address}</p>
                    </Col>
                    <Col sm={2}>
                        {this.props.type === "restaurant" ?
                            <img width="25px" src="/assets/icons/restaurant_green.svg" alt={"Restaurant-Icon"}/>
                            : this.props.type === "bar" ?
                                <img width="25px" src="/assets/icons/cocktail_red.svg" alt={"Barr-Icon"}/>
                                : this.props.type === "cafe" ?
                                    <img width="25px" src="/assets/icons/cafeBlue.svg" alt={"Cafe-Icon"}/>
                                    :
                                    <img width="25px" src="/assets/icons/baecker-gelb.svg" alt={"Backer-Icon"}/>
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}
