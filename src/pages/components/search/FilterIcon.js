import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import '../../css/search/filterContainer.css';

let selectedStyle = {
    transform: 'scale(1.10)',
};

let defaultStyle;

export default class FilterContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'true'
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        //toggle selection
        this.state.selectedFilter === 'true' ? this.setState({
            selectedFilter: 'false'
        }) : this.setState({
            selectedFilter: 'true'
        });
    };

    setImageURL() {
        let imageURL;
        if(this.state.selectedFilter === 'true') {
            imageURL = "/assets/icons/" + this.value + "-filter-aktiv.svg"
        } else {
            imageURL = "/assets/icons/" + this.value + "-filter-inaktiv.svg"
        }
        return imageURL;
    }

    render() {
        return (
            <img onClick = {this.handleClick} id = {this.value} src={this.setImageURL()} alt={this.value}/>
        );
    }
}