import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import CompanyHeadingContainer from "./CompanyHeadingContainer";
import CompanyImageContainer from "./CompanyImageContainer";
import CompanyDescriptionContainer from "./CompanyDescriptionContainer";
import CompanyButtonContainer from "./CompanyButtonContainer";
import CompanyLiveStream from "./CompanyLiveStream";
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
		this.setState({
			current: this.props.data.filter(obj => {return obj._id === id})[0]
		});
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
					<div>
						<RightSideActionComponent deselect={this.props.deselect}/>
						<CompanyHeadingContainer name={this.state.current.name}/>
						<CompanyImageContainer id={this.state.current._id} imageUrl={this.state.current.image_url}/>
						<CompanyDescriptionContainer message={this.state.current.message}/>
						{this.props.livestream &&
							<CompanyLiveStream/>
						}
						<CompanyButtonContainer name={this.state.current.name} paypal={this.state.current.paypal}/>
					</div>
				) : (<div>
					<div className="loadingSpinner">
						<Spinner size="lg" animation="grow"/>
					</div>
				</div>)}
			</div>
		);
	}
}
