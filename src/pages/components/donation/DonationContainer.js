import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import RightSideActionComponent from "../rightside/RightSideActionComponent";
import DonationContentContainer from "./DonationContentContainer";

import '../../css/rightside/rightSideContainer.css';
import '../../css/donation/donationContainer.css';



export default class DonationContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	//functions to get the information of the selected company
	componentDidMount() {
		const {id} = this.props.match.params;
		this.updateBusiness(id);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		let newId = this.props.match.params.id;
		let oldId = prevProps.match.params.id;
		if (newId === oldId) return;
		this.updateBusiness(newId);
	}

	updateBusiness(id) {
		fetch(process.env.REACT_APP_API_URL + "/api/businesses/" + id, {
			headers: {
				'content-type': 'application/json'
			},
			credentials: "include"
		}).then(res => {
			return res.json()
		}).then(res => this.setState({data: res}));
	}

	render() {
		const titleMessage = !!this.state.data && "Was möchtest du an " + this.state.data.name + " spenden?";
		return (
			<div>
				<RightSideActionComponent renderBack={true}/>
				{!!this.state.data ? <DonationContentContainer paypal={this.state.data.paypal} titleMessage={titleMessage}/> :
					<Container>Loading</Container>}
			</div>
		);
	}
}


