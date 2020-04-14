import React, {Component} from "react";
import {fetchBusinesses} from "../../../redux/actions/businessActions";
import GastronomyRenderer from "./GastronomyRenderer";
import {connect} from "react-redux";

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

class GastronomyContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		this.props.fetchData();
	}

	render() {
		return <GastronomyRenderer businesses={this.props.businesses}/>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GastronomyContainer)
