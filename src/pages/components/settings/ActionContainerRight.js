import React, {Component} from "react";
import Container from "react-bootstrap/Container";

import '../../css/settings/actionContainer.css';

export default class ActionContainerRight extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    }

    render() {
        return (
            <Container onClick={this.handleClick} className="actionContainerRight actionContainerSettings">
                <span>Rechts</span>
                <img src="/assets/icons/forward-arrow-dark.svg" alt={"Right-Arrow"}/>
                {this.props.direction}
            </Container>
        );
    }
}