import React, {Component} from 'react';
import {Router} from 'react-router';
import {Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import Map from "./pages/Map";
import PrivacyPolicyContainer from "./pages/components/footer/PrivacyPolicyContainer";
import ImprintContainer from "./pages/components/footer/ImprintContainer";
import EmailVerification from "./pages/EmailVerification";
import ApplicationVerification from "./pages/ApplicationVerification";
import BusinessOnboardingPage from "./pages/BusinessOnboardingPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import ProfilePage from "./pages/ProfilePage";
import FAQContainer from "./pages/components/faq/FAQContainer";
import RedirectPage from "./pages/RedirectPage";
import io from "socket.io-client";
import NavBarContainer from "./pages/components/navbar/NavBarContainer";
import {fetchAuth} from "./redux/actions/userActions";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import LoadingComponent from "./pages/components/LoadingComponent";
import LiveStreamPage from "./pages/LiveStreamPage";
import TestPage from "./pages/TestPage";
import RegisterContainer from "./pages/components/registration/RegisterContainer";
import FooterContainer from "./pages/components/footer/FooterContainer";
import AboutContainer from "./pages/components/about/AboutContainer";
import PartnersContainer from "./pages/components/partners/PartnersContainer";
import Alert from "react-bootstrap/Alert";
import LoginPage from "./pages/LoginPage";
import EventHelper from "./helpers/event-helper";

const browserHistory = createBrowserHistory();

export const socket = io(process.env.REACT_APP_API_URL, {transports: ['websocket'], upgrade: false});

function mapStateToProps(state) {
	return {
		fetching: state.user.authFetching,
		fetched: state.user.authFetched,
		isLoggedIn: state.user.isLoggedIn,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchAuth: () => dispatch(fetchAuth()),
	}
};


class AppUnconnected extends Component {

	constructor(props) {
		super(props);
		this.state = {
			navbar: {
				isLoggedIn: false,
				searchResults: 'undefined'
			},
		};
	}

	componentDidMount() {
		this.props.fetchAuth();
	}

	render() {
		return (
			<div>{/* Space for footer */}
				{EventHelper().shouldRenderAlert() && <Alert className={"liveAlert"} variant={"warning"}>
					<span className={"liveBadge"}>Live</span> Seid am Sonntag dabei bei unserem ersten <strong>LIVE
					Event</strong>: Wir präsentieren einen <strong>Poetry-Slam</strong> mit bekannten
					deutschen Slammern. <strong>Sonntag, 19. April um 19 Uhr hier auf LOCALL!</strong> 🥳&nbsp;&nbsp;🎉
				</Alert>}
				{!this.props.fetched ?
					<LoadingComponent/>
					:
					<div>
						<Router history={browserHistory}>
							<NavBarContainer history={browserHistory} navbar={this.state.navbar}/>
							<Switch>
								<Route path="/" exact
									   render={(props) => <RedirectPage {...props} fetched={this.props.fetched}
																		isLoggedIn={this.props.isLoggedIn}/>}/>
								<Route path="/logout"
									   render={(props) => <RedirectPage {...props} fetched={this.props.fetched}
																		isLoggedIn={this.props.isLoggedIn}/>}/>
								<Route path="/verify-email/:token" component={EmailVerification}/>
								<Route path="/verify-application/:token" component={ApplicationVerification}/>
								<Route path="/reset-password/:token"
									   render={() => this.props.isLoggedIn ? <Redirect to="/"/> :
										   <PasswordResetPage/>}/>/>
								<Route path="/onboarding" component={BusinessOnboardingPage}/>
								<Route path="/app" render={(props) => <Map {...props} history={browserHistory}/>}/>
								<Route path="/faq" component={FAQContainer}/>
								<Route path="/profile"
									   render={() => !this.props.isLoggedIn ? <Redirect to="/"/> : <ProfilePage/>}/>
								<Route path="/imprint" component={ImprintContainer}/>
								<Route path="/about" component={AboutContainer}/>
								<Route path="/partners" component={PartnersContainer}/>
								<Route path="/privacy-policy" component={PrivacyPolicyContainer}/>
								<Route path="/live/:id"
									   render={(props) => <LiveStreamPage {...props} history={browserHistory}/>}/>
								<Route path="/test" component={TestPage}/>
								<Route exact path="/register"
									   render={() => this.props.isLoggedIn ? <Redirect to="/"/> :
										   <RegisterContainer/>}/>
								<Route exact path="/register/gastro"
									   render={() => this.props.isLoggedIn ? <Redirect to="/"/> :
										   <RegisterContainer gastro={true}/>}/>
								<Route exact path="/login"
									   render={() => this.props.isLoggedIn ? <Redirect to="/"/> :
										   <LoginPage/>}/>
								<Route render={() => <Redirect to="/"/>}/>
							</Switch>
							<FooterContainer/>
						</Router>
					</div>
				}

			</div>
		);
	}
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppUnconnected);
export default App;
