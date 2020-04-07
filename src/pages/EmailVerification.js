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
        axios.post(process.env.REACT_APP_API_URL + '/v1/account/email-validation', {
            account: {
                token: this.props.match.params.token
            }
        },{
            withCredentials: true
        })
            .then((data) => {
                this.setState({
                    isConfirmed: true
                });
                this.props.history.push('/login');
            })
            .catch((err) => {
                console.debug(err);
            })
    }

    render() {
        return (
            <>
            </>
        );
    }
}
