import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import '../../../css/search/searchResult.css';

let selectedStyle = {
    color: 'var(--white)',
    background: 'var(--pale-teal)'
};

let defaultStyle = {
    color: '#6e6e6e',
    background: 'var(--white)'
};



export default class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClick = (id) => {
        this.props.onClick(id);
    };

    render() {
        console.log(this.props.id, this.props.index)
        return (
            <Container style = {this.props.index === this.props.id ? selectedStyle : defaultStyle} className="searchResultHolder">
                <Row className="searchResultRow
                " onClick={this.onClick.bind(this, this.props.id)}>
                    <Col sm={10}>
                        <h5>{this.props.name}</h5>
                        <p>{this.props.address}</p>
                    </Col>
                    <Col sm={2}>
                        {this.props.type === "restaurant" ?
                            <img width="25px" src= {this.props.index === this.props.id ? "/assets/icons/restaurant.svg" : "/assets/icons/restaurant-green.svg"} alt={"Restaurant-Icon"}/>
                            : this.props.type === "bar" ?
                                <img width="25px" src={this.props.index === this.props.id ? "/assets/icons/cocktail.svg" : "/assets/icons/cocktail-red.svg"} alt={"Barr-Icon"}/>
                                : this.props.type === "cafe" ?
                                    <img width="25px" src={this.props.index === this.props.id ? "/assets/icons/cafe.svg" : "/assets/icons/cafe-blue.svg"} alt={"Cafe-Icon"}/>
                                    :
                                    <img width="25px" src={this.props.index === this.props.id ? "/assets/icons/baecker.svg" : "/assets/icons/baecker-gelb.svg"} alt={"Baecker-Icon"}/>
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

