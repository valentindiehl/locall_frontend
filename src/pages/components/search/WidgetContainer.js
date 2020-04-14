import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchContainer from "./SearchContainer";

import '../../css/search/widgetContainer.css';

export default class WidgetContainer extends Component {

    render() {
        return (
            <Container fluid style={{marginTop: -10}} className="widgetContainer">
                <SearchContainer data={this.props.data} index={this.props.index}
                                 selection={this.props.selection} changeSearchResults={this.props.changeSearchResults}/>
            </Container>
        );
    }
}
