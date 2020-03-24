import React, {Component} from 'react';
import {Router} from 'react-router';
import {Link, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import MapPage from "./pages/Map";
import socketIOClient from "socket.io-client";
import Navbar from "react-bootstrap/Navbar";
import Login from "./pages/Login";
import withAuth from "./pages/components/WithAuth";
import ProgressBarContainer from "./pages/components/navbar/ProgressBarContainer";
import NotificationContainer from "./pages/components/navbar/NotificationContainer";
import axios from "axios";

const browserHistory = createBrowserHistory();

export default class App extends Component {
  
  componentDidMount() {
		const socket = socketIOClient("http://localhost:8000");
	}

	logout() {
        axios.get('/api/users/logout')
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
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
                        <ProgressBarContainer/>
                        <NotificationContainer/>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Brand onClick={this.logout.bind(this, this.props.history)} href="/login" className="profileImage">
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
                        <Route path="/" exact component={ withAuth(MapPage) }/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
