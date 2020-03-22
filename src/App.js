import React, { Component } from 'react';

import { Router } from 'react-router';
import { Link, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from "history";

import Home from "./components/pages/Home";
import Secret from "./components/pages/Secret";
import MapPage from "./components/pages/Map";

const browserHistory = createBrowserHistory();

export default class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/secret">Secret</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/" exact component={MapPage} />
                        <Route path="/secret" component={Secret} />
                    </Switch>
                </div>
            </Router>
        );
    }
}