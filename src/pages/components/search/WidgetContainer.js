import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchContainer from "./SearchContainer";

import '../../css/search/widgetContainer.css';

export default class WidgetContainer extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.data)
    }

    render() {
        return (
            <Container fluid className="widgetContainer">
                <SearchContainer data={this.props.data} curIndex={this.props.curIndex} selection={this.props.selection}/>
            </Container>
        );
    }
}