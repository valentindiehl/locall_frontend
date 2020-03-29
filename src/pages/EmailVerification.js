import React from "react";
import Container from "react-bootstrap/Container";
import InfoContainer from "./components/landingpage/InfoContainer";
import SignUpContainer from "./components/landingpage/SignUpContainer";
import axios from 'axios';


export default class EmailVerification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConfirmed: false
        }
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + '/api/users/verifyEmail?token=' + this.props.match.params.token, {
            withCredentials: true
        })
            .then((data) => {
                    this.setState({
                        isConfirmed: true
                    });
                this.props.history.push('/login');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                Blubs
            </div>
        );
    }
}
