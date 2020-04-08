import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {Spinner} from "react-bootstrap";
import { fetchAuth } from "../redux/actions/userActions";
import { connect } from 'react-redux';
import { store } from '../redux/store';

function mapStateToProps(state) {
    return {
        fetching: state.user.authFetching,
        fetched: state.user.authFetched,
        isLoggedIn: state.user.isLoggedIn,
    }
}


export default function withAuth(ComponentToProtect) {
    class ProtectedComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                redirect: false,
            };
        }

        render() {
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

    return connect(mapStateToProps)(ComponentToProtect);
}