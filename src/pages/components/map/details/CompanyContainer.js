import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import CompanyHeadingContainer from "./CompanyHeadingContainer";
import CompanyImageContainer from "./CompanyImageContainer";
import CompanyDescriptionContainer from "./CompanyDescriptionContainer";
import CompanyButtonContainer from "./CompanyButtonContainer";
import RightSideActionComponent from "../rightside/RightSideActionComponent";
import {Spinner} from "react-bootstrap";

import '../../../css/details/companyContainer.css';


export default class CompanyContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: {}
		}
	}

	componentDidMount() {
		const {id} = this.props.match.params;
		if (id) this.props.select(id);
		console.log(id);
		this.setState({
			current: this.props.data.filter(obj => {return obj._id === id})[0]
		})
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
		return (
			<div className="companyContainer">
				{!!this.state.current ? (
					<Container>
						<RightSideActionComponent deselect={this.props.deselect}/>
						<CompanyHeadingContainer name={this.state.current.name}/>
						<CompanyImageContainer id={this.state.current._id} imageUrl={this.state.current.image_url}/>
						<CompanyDescriptionContainer message={this.state.current.message}/>
						<CompanyButtonContainer name={this.state.current.name} paypal={this.state.current.paypal}/>
					</Container>
				) : (<Container>
					<div className="loadingSpinner">
						<Spinner size="lg" animation="grow"/>
					</div>
				</Container>)}
			</div>
		);
	}
}
