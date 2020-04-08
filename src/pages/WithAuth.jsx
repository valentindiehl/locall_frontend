import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {Spinner} from "react-bootstrap";
import { fetchAuth } from "../redux/actions/userActions";
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        fetching: state.user.authFetching,
        fetched: state.user.authFetched,
        isLoggedIn: state.user.isLoggedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAuth: () => { dispatch(fetchAuth())}
    }
};


export default function withAuth(ComponentToProtect) {
    class ProtectedComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                redirect: false,
            };
        }

        componentDidMount() {
            /*
            axios(process.env.REACT_APP_API_URL + "/v1/auth", {
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
                }); */
        }

        render() {
            const {loading, redirect} = this.state;
            if (this.props.fetching) {
                return (
                    <div className="loadingSpinner">
                        <Spinner size="lg" animation="grow"/>
                    </div>
                )
            }
            if (this.props.fetched && !this.props.isLoggedIn) {
                return <Redirect to="/login"/>;
            }
            return <ComponentToProtect {...this.props} />;

        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(ProtectedComponent);
}