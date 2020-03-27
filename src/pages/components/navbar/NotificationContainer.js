import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

import '../../css/navbar/notificationContainer.css';


export default class NotificationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 40
        }
    }

    render() {
        return (
            <Container className="notificationContainer justify-content-end" >
                <img src="/assets/icons/notification.svg" alt={"Notification-Icon"}/>
            </Container>
        );
    }
}