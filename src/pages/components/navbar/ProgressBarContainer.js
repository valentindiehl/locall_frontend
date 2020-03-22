import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";

import '../../css/navbar/progressBarContainer.css';


export default class ProgressBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 40
        }
    }

    render() {
        return (
            <Container className="progressBarContainer justify-content-end" >
                <p>BEGINNER {`${this.state.percent}%`}</p>
                <ProgressBar now={this.state.percent} label={`${this.state.percent}%`} srOnly />
            </Container>
        );
    }
}