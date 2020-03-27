import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

import '../../css/navbar/socialPointsNavBarContainer.css';


export default class SocialPointsNavBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 40
        }
    }

    render() {
        return (
            <Container className="socialPointsNavBarContainer justify-content-end" >
                <pre>SOCIAL POINTS: {`${this.state.points}`}</pre>
            </Container>
        );
    }
}