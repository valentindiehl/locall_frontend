import React, {Component} from "react";
import Container from "react-bootstrap/Container";

import '../../css/settings/actionContainer.css';

export default class ActionContainerLeft extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    }

    render() {
        return (
            <Container onClick={this.handleClick} className="actionContainerLeft actionContainerSettings">
                <img src="/assets/icons/back-arrow-dark.svg" alt={"Left-Arrow"}/>
                {this.props.direction}
                <span>Links</span>
            </Container>
        );
    }
}