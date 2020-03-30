import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

export default class ProfileContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            redirect: false,
        };
    }

    componentDidMount() {
        axios(process.env.REACT_APP_API_URL + "/api/users/check", {
            method: "get",
            withCredentials: true
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({loading: false});
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                this.setState({loading: false, redirect: true});
            });
    }

    render() {
        return (
            <Container>

            </Container>
        )
    }
}
