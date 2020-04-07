import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchContainer from "./SearchContainer";

import '../../css/search/widgetContainer.css';

export default class WidgetContainer extends Component {

    render() {
        return (
            <Container fluid className="widgetContainer">
                <SearchContainer data={this.props.data} curIndex={this.props.curIndex}
                                 selection={this.props.selection} searchResults = {this.props.searchResults}/>
            </Container>
        );
    }
}