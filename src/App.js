import React, {Component} from 'react';
import {Router} from 'react-router';
import {Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import Map from "./pages/Map";
import withAuth from "./pages/WithAuth";
import PrivacyPolicyContainer from "./pages/components/footer/PrivacyPolicyContainer";
import ImprintContainer from "./pages/components/footer/ImprintContainer";
import EmailVerification from "./pages/EmailVerification";
import ApplicationVerification from "./pages/ApplicationVerification";
import BusinessOnboardingPage from "./pages/BusinessOnboardingPage";
import LoginPage from "./pages/LoginPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import ProfilePage from "./pages/ProfilePage";
import FAQPage from "./pages/FAQPage";
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
                    <Route path="/" exact component={LoginPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/logout" component={LoginPage}/>
                    <Route path="/verify-email/:token" component={EmailVerification}/>
                    <Route path="/verify-application/:token" component={ApplicationVerification}/>
                    <Route path="/reset-password/:token" component={PasswordResetPage}/>
                    <Route path="/onboarding" component={BusinessOnboardingPage}/>
                    <Route path="/app" component={withAuth(Map)}/>
                    <Route path="/faq" component={FAQPage}/>
                    <Route path="/profile" component={withAuth(ProfilePage)}/>
                    <Route path="/imprint" component={ImprintContainer}/>
                    <Route path="/privacy-policy" component={PrivacyPolicyContainer}/>
                    <Route component={LoginPage}/>
                </Switch>
            </Router>
        );
    }
}


