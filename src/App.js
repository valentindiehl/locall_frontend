import React, {Component} from 'react';
import {Router} from 'react-router';
import {Link, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import CafeComponent from "./pages/components/CafeComponent";
import io from "socket.io-client";
import Map from "./pages/Map";
import CitySelection from "./pages/CitySelection";
import withAuth from "./pages/components/WithAuth";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicyContainer from "./pages/components/footer/PrivacyPolicyContainer";
import ImprintContainer from "./pages/components/footer/ImprintContainer";
import FooterContainer from "./pages/components/footer/FooterContainer";
import EmailVerification from "./pages/EmailVerification";
import LoginPage from "./pages/LoginPage";

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
                    {/* Wenn Login Page offen ist
                    <Route path="/" exact component={LoginPage}/>
                    <Route path="/login" component={LoginPage}/>
                    /*/}
                    <Route path="/" exact component={LandingPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/logout" component={LoginPage}/>
                    <Route path="/imprint" component={ImprintContainer}/>
                    <Route path="/privacy-policy" component={PrivacyPolicyContainer}/>
                    <Route path="/app" component={Map}/>
                    <Route path="/cities" component={CitySelection}/>
                    <Route path="/cafe" component={CafeComponent}/>
					<Route path="/verify-email/:token" component={EmailVerification} />
					<Route component={LandingPage}/>
                </Switch>
            </Router>
        );
    }
}
