import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import CompanyHeadingContainer from "./CompanyHeadingContainer";
import CompanyImageContainer from "./CompanyImageContainer";
import CompanyDescriptionContainer from "./CompanyDescriptionContainer";
import CompanyButtonContainer from "./CompanyButtonContainer";
import CompanyActionContainer from "./CompanyActionContainer";

import '../../css/details/companyContainer.css';


export default class CompanyContainer extends Component {
	constructor(props) {
		super(props);
		console.log("Company Container is being rendered");
		this.state = {
			index: 0
		}
	}

	componentDidMount() {
		const {id} = this.props.match.params;
		fetch(process.env.REACT_APP_API_URL + "/api/businesses/" + id, {
			headers: {
				'content-type': 'application/json'
			}
		}).then(res => {
			return res.json()
		}).then(res => this.setState({data: res}));
	}

	componentWillReceiveProps(nextProps, nextContext) {
		this.forceUpdate();
	}

	render() {
		return (
			<div className="companyContainer">
				<CompanyActionContainer/>
				{!!this.state.data ? (
					<Container>
						<CompanyHeadingContainer name={this.state.data.name}
												 supporter={this.state.data.supporter_counter}
												 donations={this.state.data.donation_counter}/>
						<CompanyImageContainer image={this.state.data.image_url}/>
						<CompanyDescriptionContainer message={this.state.data.description}/>
						<CompanyButtonContainer name={this.state.data.name}/>
					</Container>
				) : (<Container>Loading</Container>)}
			</div>
		);
	}
}
