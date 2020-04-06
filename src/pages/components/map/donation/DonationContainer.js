import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import RightSideActionComponent from "../rightside/RightSideActionComponent";
import DonationContentContainer from "./DonationContentContainer";

import '../../../css/rightside/rightSideContainer.css';
import '../../../css/donation/donationContainer.css';


export default class DonationContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			current: {}
		};
	}

	//functions to get the information of the selected company
	componentDidMount() {
		const {id} = this.props.match.params;
		if (id) this.props.select(id);
		console.log(id);
		this.setState({
			current: this.props.data.filter(obj => {return obj._id === id})[0]
		});
		console.log(this.props.data);
		console.log(this.state.current);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.match.params.id !== this.props.match.params.id)
		{
			this.setState({
				current: this.props.data.filter(obj => {return obj._id === this.props.match.params.id})[0]
			})
		}
	}

	render() {
		const titleMessage = !!this.state.current && "Was möchtest du an " + this.state.current.name + " spenden?";
		return (
			<div>
				<RightSideActionComponent renderBack={true}/>
				{!!this.state.current ?
					<DonationContentContainer paypal={this.state.current.paypal} titleMessage={titleMessage}/> :
					<Container>Loading</Container>}
			</div>
		);
	}
}


