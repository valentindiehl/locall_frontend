import React, {Component} from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import {fetchProfile} from "../../../redux/actions/userActions";
import {connect} from 'react-redux';
import LoadingComponent from "../LoadingComponent";
import {Nav} from "react-bootstrap";

const mapDispatchToProps = dispatch => {
	return {
		logOut: () => dispatch({type: "SET_AUTHENTICATION_MANUAL", payload: false}),
		fetchProfile: () => dispatch(fetchProfile()),
	}
};

function mapStateToProps(state) {
	return {
		fetching: state.user.userFetching,
		fetched: state.user.userFetched,
		userData: state.user.userData,
	}
}


class ProfileDropDown extends Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}

	componentDidMount() {
		this.props.fetchProfile();
	}

	handleLogout(event) {
		event.preventDefault();
		axios.delete(process.env.REACT_APP_API_URL + '/v1/auth', {
			withCredentials: true
		})
			.then(res => {
				if (res.status === 204 || res.status === 304) {
					this.props.logOut();
					window.location.pathname = "/";
				} else {
					throw new Error(res.error);
				}
			})
			.catch(err => {
				console.error(err);
				alert('Error logging out please try again');
			});
	}

	render() {
		return (
			<>
				{!this.props.fetched && <LoadingComponent/>}
				{this.props.fetched &&
				<NavDropdown className="profileDropdownMenu" alignRight title={
					<>
						<div className={"navLink profile"}>Profil</div>
						<Navbar.Brand className="profileImage">
							<img
								src={this.props.userData && this.props.userData.account.avatarUrl ? this.props.userData.account.avatarUrl : "/assets/icons/profilbild-profilbild-gelb.svg"}
								width="54px"
								height="54px"
								className="d-inline-block align-center rounded-circle"
								alt="Login"
							/>
						</Navbar.Brand>
					</>
				} id="collasible-nav-dropdown">
					<NavDropdown.Item href="/faq">
						<Row>
							<Col md={2} className="dropDownIconCol">
								<img
									src={"/assets/icons/support.svg"}
									width="18px"
									height="18px"
									className="d-inline-block align-center"
									alt="Support"
								/>
							</Col>
							<Col md={10}>
								Support
							</Col>
						</Row>
					</NavDropdown.Item>
					<NavDropdown.Item href="/profile">
						<Row>
							<Col md={2} className="dropDownIconCol">
								<img
									src={"/assets/icons/settings.svg"}
									width="18px"
									height="18px"
									className="d-inline-block align-center"
									alt="Login"
								/>
							</Col>
							<Col md={10}>
								Einstellungen
							</Col>
						</Row>
					</NavDropdown.Item>
					<NavDropdown.Item onClick={this.handleLogout}>
						<Row>
							<Col md={2} className="dropDownIconCol">
								<img
									src={"/assets/icons/logout.svg"}
									width="18px"
									height="18px"
									className="d-inline-block align-center"
									alt="Login"
								/>
							</Col>
							<Col md={10}>
								Abmelden
							</Col>
						</Row>
					</NavDropdown.Item>
				</NavDropdown>
				}
			</>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropDown);
