import React, {Component} from 'react';
import {Router} from 'react-router';
import {Link, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import Map from "./pages/Map";
import socketIOClient from "socket.io-client";
import withAuth from "./pages/components/WithAuth";
import LandingPage from "./pages/LandingPage";


const browserHistory = createBrowserHistory();

export default class App extends Component {

    componentDidMount() {
        const socket = socketIOClient("http://localhost:8000");
    }

    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    <Switch>
                        <Route path="/map" component={Map}/>
                        <Route path="/" exact component={LandingPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
