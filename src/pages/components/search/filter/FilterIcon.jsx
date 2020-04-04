import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import '../../../css/search/filterContainer.css';

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
        this.state.selected === 'true' ? this.setState({
            selected: 'false'
        }) : this.setState({
            selected: 'true'
        });
        this.props.onChange(this.props.local);
    };

    setImageURL() {
        let imageURL;
        if(this.state.selected === 'true') {
            imageURL = "/assets/icons/filter-" + this.props.local + "-aktiv.svg"
        } else {
            imageURL = "/assets/icons/filter-" + this.props.local + "-inaktiv.svg"
        }
        return imageURL;
    }

    render() {
        return (
            <img onClick = {this.handleClick} id = {this.props.local} src={this.setImageURL()} alt={this.value}/>
        );
    }
}