import React, {Component} from 'react';
import {Router} from 'react-router';
import {Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import Map from "./pages/Map";
import CitySelection from "./pages/CitySelection";
import withAuth from "./pages/components/WithAuth";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicyContainer from "./pages/components/landingpage/PrivacyPolicyContainer";
import ImprintContainer from "./pages/components/landingpage/ImprintContainer";
import NavBarContainer from "./pages/components/navbar/NavBarContainer";
import FooterContainer from "./pages/components/landingpage/FooterContainer";

const browserHistory = createBrowserHistory();

export default class App extends Component {

	render() {
		return (
			<Router history={browserHistory}>
				<NavBarContainer/>
				<Switch>
					<Route path="/" exact component={LandingPage}/>
					<Route path="/imprint" component={ImprintContainer}/>
					<Route path="/privacy-policy" component={PrivacyPolicyContainer}/>
					<Route path="/app" component={withAuth(Map)}/>
					<Route path="/cities" component={CitySelection}/>
				</Switch>
				<FooterContainer/>
			</Router>
		);
	}
}
