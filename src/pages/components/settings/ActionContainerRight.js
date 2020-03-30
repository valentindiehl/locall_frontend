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
        let actionContainer;
        if (this.props.isBusinessProfile) {
            actionContainer = <>
                <img src="/assets/icons/forward-arrow-dark.svg" alt={"Right-Arrow"}/>
                <span>Zum User-Profil</span>
            </>
        }
        return (
            <Container onClick={this.handleClick} className="actionContainerRight actionContainerSettings">
                {actionContainer}
            </Container>
        );
    }
}