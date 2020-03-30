import React from "react";
import axios from 'axios';


export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConfirmed: false
        }
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + '/api/users/profile', {
            withCredentials: true
        })
            .then((data) => {
                if (data.business) {
                    this.props.history.push('/business-profile');
                } else {
                    this.props.history.push('/user-profile');
                }
            })
            .catch((err) => {
            })
    }

    render() {
        return (
            <>
            </>
        );
    }
}
