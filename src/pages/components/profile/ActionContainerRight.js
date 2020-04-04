import React, {Component} from "react";
import Container from "react-bootstrap/Container";

import '../../css/profile/actionContainer.css';

export default class ActionContainerRight extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.setRedirectToUserProfilForBusiness();
    }

    render() {
        let actionContainer;
        if (this.props.isBusiness && !this.props.fromProfile) {
            actionContainer = <>
                <span>Zum User-Profil</span>
                <img src="/assets/icons/forward-arrow-dark.svg" alt={"Right-Arrow"}/>
            </>
        }
        return (
            <Container onClick={this.handleClick} className="actionContainerRight actionContainerSettings">
                {actionContainer}
            </Container>
        );
    }
}