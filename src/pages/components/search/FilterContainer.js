import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FilterIcon from "./FilterIcon";

import '../../css/search/filterContainer.css';

let selectedStyle = {
    transform: 'scale(1.10)',
};

let defaultStyle;

export default class FilterContainer extends Component {

    constructor(props) {
        super(props);

    };

    render() {
        return (
            <Row className="filterRow">
                <Col>
                    <FilterContainer value = "cafe" onChange = {this.props.onChange()}/>
                </Col>
                <Col>
                    <FilterContainer value = "restaurant" onChange = {this.props.onChange()}/>
                </Col>
                <Col>
                    <FilterContainer value = "baecker" onChange = {this.props.onChange()}/>
                </Col>
                <Col>
                    <FilterContainer value = "bar" onChange = {this.props.onChange()}/>
                </Col>
            </Row>
        );
    }
}