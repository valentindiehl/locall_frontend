import React, {Component} from 'react';
import {Router} from 'react-router';
import {Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import Map from "./pages/Map";
import GastroDashboard from "./pages/GastroDashboard";
import GastroProfil from "./pages/GastroProfil";
import withAuth from "./pages/components/WithAuth";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicyContainer from "./pages/components/footer/PrivacyPolicyContainer";
import ImprintContainer from "./pages/components/footer/ImprintContainer";
import EmailVerification from "./pages/EmailVerification";
import LoginPage from "./pages/LoginPage";
import PasswordResetPage from "./pages/components/login/PasswordResetPage";
import io from "socket.io-client";

const browserHistory = createBrowserHistory();

export const socket = io(process.env.REACT_APP_API_URL, {transports: ['websocket'], upgrade: false});

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route path="/" exact component={LandingPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/logout" component={LoginPage}/>
                    <Route path="/imprint" component={ImprintContainer}/>
                    <Route path="/privacy-policy" component={PrivacyPolicyContainer}/>
                    <Route path="/app" component={withAuth(Map)}/>
                    <Route path="/verify-email/:token" component={EmailVerification}/>
                    <Route path="/reset-password/:token" component={PasswordResetPage}/>
                    <Route path="/gastro-dashboard" component={withAuth(GastroDashboard)}/>
                    <Route path="/gastro-profil/:id" component={withAuth(GastroProfil)}/>
                    <Route component={LandingPage}/>
                </Switch>
            </Router>
        );
    }

}
