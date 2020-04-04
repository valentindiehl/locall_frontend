import React, {Component} from "react";
import Container from "react-bootstrap/Container";

import '../../css/profile/actionContainer.css';

export default class ActionContainerLeft extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.props.fromProfile) {
            this.props.setRedirectToBusinessProfile();
        } else {
            this.props.history.push("/app");
        }
    }

    render() {
        let actionContainer;
        if (this.props.fromProfile) {
            actionContainer =
                <>
                    <img src="/assets/icons/back-arrow-dark.svg" alt={"Left-Arrow"}/>
                    <span>Zurück zum Gastro-Profil</span>
                </>
        } else {
            actionContainer =
                <>
                    <img src="/assets/icons/back-arrow-dark.svg" alt={"Left-Arrow"}/>
                    <span>Zurück zur Karte</span>
                </>
        }
        return (
            <Container onClick={this.handleClick} className="actionContainerLeft actionContainerSettings">
                {actionContainer}
            </Container>
        );
    }
}