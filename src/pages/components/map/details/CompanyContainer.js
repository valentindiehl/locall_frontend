import React, {Component} from 'react';
import CompanyHeadingContainer from "./CompanyHeadingContainer";
import CompanyImageContainer from "./CompanyImageContainer";
import CompanyDescriptionContainer from "./CompanyDescriptionContainer";
import CompanyButtonContainer from "./CompanyButtonContainer";
import CompanyLiveStream from "./CompanyLiveStream";
import RightSideActionComponent from "../rightside/RightSideActionComponent";
import {Spinner} from "react-bootstrap";

import '../../../css/details/companyContainer.css';
import {fetchEvents} from "../../../../redux/actions/eventsActions";
import {connect} from "react-redux";
import EventHelper from "../../../../helpers/event-helper";


function mapStateToProps(state) {
	return {
		events: state.events.eventsData
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchEventData: () => dispatch(fetchEvents())
	}
}

class CompanyContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: {},
			myEvents: null
		}

	}

	componentDidMount() {
		const {id} = this.props.match.params;
		if (id) this.props.select(id);
		this.setState({
			current: this.props.data.filter(obj => {
				return obj._id === id
			})[0]
		});
		this.props.fetchEventData();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		let businessId = this.props.match.params.id;
		if (prevProps.match.params.id !== businessId) {
			this.setState({
				current: this.props.data.filter(obj => {
					return obj._id === this.props.match.params.id
				})[0]
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
						{!!this.props.events && <CompanyLiveStream
							events={EventHelper().filterByBusiness(this.props.events, this.props.match.params.id)}/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer)
