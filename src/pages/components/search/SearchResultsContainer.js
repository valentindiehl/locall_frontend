import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchResult from "./SearchResult";
import { ReactDOM } from "react-dom";

import '../../css/search/searchResultsContainer.css';

export default class SearchResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        const Test = ({ data }) => (
            <div>
                {data.map(data => (
                    <div className="station" key={data.id}>{data.name}</div>
                ))}
            </div>
        );

        ReactDOM.render(
            <div>
                <Test stations={this.props.data} />
            </div>,
            document.getElementById('container')
        );
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container className="searchResultsContainer">
                <Test data={this.props.data.data} />
            </Container>
        );
    }
}