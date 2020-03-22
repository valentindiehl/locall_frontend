import React from 'react';
import {Router, Route, Switch} from 'react-router';
import {createBrowserHistory} from 'history'

// Route Components
import Home from "./pages/Home";
import Secret from "./pages/Secret";

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/secret" component={Secret} />
        </Switch>
    </Router>
);