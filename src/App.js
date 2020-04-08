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
import FAQContainer from "./pages/components/faq/FAQContainer";
import RedirectPage from "./pages/RedirectPage";
import io from "socket.io-client";
import NavBarContainer from "./pages/components/navbar/NavBarContainer";
import { fetchAuth } from "./redux/actions/userActions";
import { connect } from "react-redux";
import { Redirect} from "react-router";

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
        console.log("Blub");
        this.props.fetchAuth();
        console.log(this.props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState);
        console.log(this.props);
        if (prevProps.fetching && this.props.fetched && this.props.isLoggedIn)
        {
            console.log("User is logged in!");
        } else if (prevProps.fetching && this.props.fetched && !this.props.isLoggedIn)
        {
            console.log("User is not logged in!");
        }
    }

    render() {
        return (
            <div>
                { this.props.fetching ?
                    <div> Loading </div>
                :
                    <div>
                    <Router history={browserHistory}>
                        <NavBarContainer history={browserHistory} navbar={this.state.navbar}/>
                        <Switch>
                     <Route path="/" exact render={(props) => <RedirectPage {...props} fetched={this.props.fetched} isLoggedIn={this.props.isLoggedIn} /> } />
                    <Route path="/login" render={() => this.props.isLoggedIn ? <Redirect to="/app" /> : <LoginPage />} />
                    <Route path="/logout" component={LoginPage}/>
                    <Route path="/verify-email/:token" component={EmailVerification}/>
                    <Route path="/verify-application/:token" component={ApplicationVerification}/>
                    <Route path="/reset-password/:token" component={PasswordResetPage}/>
                    <Route path="/onboarding" component={BusinessOnboardingPage}/>
                    <Route path="/app" component={withAuth(Map)} />
                    <Route path="/faq" component={FAQContainer}/>
                    <Route path="/profile" component={withAuth(ProfilePage)}/>
                    <Route path="/imprint" component={ImprintContainer}/>
                    <Route path="/privacy-policy" component={PrivacyPolicyContainer}/>
                    <Route component={LoginPage}/>
                    </Switch>
                    </Router>
                    </div>
                }

            </div>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppUnconnected);
export default App;