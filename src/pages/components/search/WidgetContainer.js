import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import SearchContainer from "./SearchContainer";
import Row from "react-bootstrap/Row";

import '../../css/search/widgetContainer.css';

export default class WidgetContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid className="widgetContainer">
                <SearchContainer data={this.props.data}/>
            </Container>
        );
    }
}