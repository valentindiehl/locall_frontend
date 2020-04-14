import React, {Component} from "react";

import '../../css/general/general-styles.css';
import '../../css/partners/partnersContainer.css';
import PartnersRenderer from "./PartnersRenderer";
import {connect} from "react-redux";
import {fetchBusinesses} from "../../../redux/actions/businessActions";

function mapStateToProps(state) {
	return {
		businesses: state.business.businessData.data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchData: () => dispatch(fetchBusinesses()),
	}
}

class PartnersContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		this.props.fetchData();
	}

	render() {
		return <PartnersRenderer businesses={this.props.businesses}/>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PartnersContainer)
