import React, {Component} from 'react';
import {Router} from 'react-router';
import {Link, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import Secret from "./pages/Secret";
import MapPage from "./pages/Map";
import socketIOClient from "socket.io-client";
import Navbar from "react-bootstrap/Navbar";
import Login from "./pages/Login";
import withAuth from "./pages/components/WithAuth";

const browserHistory = createBrowserHistory();

export default class App extends Component {
  
  componentDidMount() {
		const socket = socketIOClient("http://localhost:8000");
	}
  
    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    <Navbar>
                        <Navbar.Brand href="#home" className="brandImage">
                            <img
                                src="/assets/icons/logo-locall.svg"
                                width="170px"
                                height="auto"
                                className="d-inline-block align-center"
                                alt="Locall Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Brand href="/login" className="profileImage">
                                <img
                                    src="/assets/icons/valle.svg"
                                    width="54px"
                                    height="54px"
                                    className="d-inline-block align-center rounded-circle"
                                    alt="Locall Logo"
                                />
                            </Navbar.Brand>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route path="/" exact component={ MapPage }/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
