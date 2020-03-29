import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import '../../css/donation/thanksContainer.css';
import '../../css/rightside/blueButton.css';
import RightSideActionComponent from "../rightside/RightSideActionComponent";


export default class ThanksContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 40
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let newPath = window.location.pathname.substring(0, window.location.pathname.indexOf('/company'));
        this.props.history.push(newPath);
    }

    render() {
        return (
            <Container className="thanksContainer">
                <h3>DANKE,</h3>
                <p className="headingParagraph">dass du so ein so toller Mensch bist und an andere denkst!</p>
                <img src="/assets/images/laden.png" alt={"Illustration mit Luftballons"}/>
                <Container className="socialPointsContainer">
                    <p className="socialPointsAmount">20</p>
                    <p className="socialPointsMessage">SOCIAL POINTS<br/>ERHALTEN</p>
                </Container>
                <Container className="buttonContainer">
                    <Button onClick={this.handleClick} className="closeButton blueButton">SCHLIESSEN</Button>{' '}
                </Container>
            </Container>
        );
    }
}
