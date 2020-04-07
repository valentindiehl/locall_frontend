import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FilterIcon from "./FilterIcon";

import '../../../css/search/filterContainer.css';


export default class FilterContainer extends Component {

    constructor(props) {
        super(props);

    };

    render() {
        return (
            <Row className="filterRow">
                <Col>
                    <FilterIcon local = "cafe" onChange = {this.props.onChange}/>
                </Col>
                <Col>
                    <FilterIcon local = "restaurant" onChange = {this.props.onChange}/>
                </Col>
                <Col>
                    <FilterIcon local = "bakery" onChange = {this.props.onChange}/>
                </Col>
                <Col>
                    <FilterIcon local = "bar" onChange = {this.props.onChange}/>
                </Col>
            </Row>
        );
    }
}