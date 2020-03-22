import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import SearchContainer from "./SearchContainer";
import Row from "react-bootstrap/Row";

import '../css/widgetContainer.css';


export default class WidgetContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid className="widgetContainer">
                {/*itemSelected CSS Class to show second row*/}
                <Row className="widgetRow">
                    <Col className="widgetCol">
                        <SearchContainer/>
                    </Col>
                    {/* Col einfügen wenn item selected*/}
                </Row>
            </Container>
        );
    }
}