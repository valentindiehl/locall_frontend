import React, {Component} from 'react';
import {Router} from 'react-router';
import {Link, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import Map from "./pages/Map";
import CitySelection from "./pages/CitySelection";
import withAuth from "./pages/components/WithAuth";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicyContainer from "./pages/components/landingpage/PrivacyPolicyContainer";
import ImprintContainer from "./pages/components/landingpage/ImprintContainer";
import FooterContainer from "./pages/components/landingpage/FooterContainer";
import LoginPage from "./pages/LoginPage";

const browserHistory = createBrowserHistory();

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
                    <Route path="/imprint" component={ImprintContainer}/>
                    <Route path="/privacy-policy" component={PrivacyPolicyContainer}/>
                    <Route path="/app" component={withAuth(Map)}/>
                    <Route path="/cities" component={CitySelection}/>
                    <Route component={LandingPage}/>
                </Switch>
                <FooterContainer/>
            </Router>
        );
    }
}
