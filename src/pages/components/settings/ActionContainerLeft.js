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
        let actionContainer;
        if (this.props.isUser || this.props.isBusinessProfile) {
            actionContainer = <>
                <img src="/assets/icons/back-arrow-dark.svg" alt={"Left-Arrow"}/>
                <span>Zurück zur Karte</span>
            </>
        } else if (this.props.isBusiness) {
            actionContainer = <>
                <img src="/assets/icons/back-arrow-dark.svg" alt={"Left-Arrow"}/>
                <span>Zurück zum Gastro-Profil</span>
            </>
        }
        return (
            <Container onClick={this.handleClick} className="actionContainerLeft actionContainerSettings">
                {actionContainer}
            </Container>
        );
    }
}