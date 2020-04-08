import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import {withRouter} from "react-router-dom";
import {deselectBusiness, fetchBusinesses, selectBusiness} from "../../../../redux/actions/businessActions";
import {connect} from "react-redux";


const mapDispatchToProps = dispatch => {
	return {
		deselect: () => dispatch(deselectBusiness())
	}
};

class CloseComponentUnconnected extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.deselect();
		this.props.history.push('/app');
	}

	render() {
		return (
			<Container className="closeContainer">
				<img onClick={this.handleClick} src="/assets/icons/close.svg" alt={"Close"}/>
			</Container>
		);
	}
}

const CloseComponent = connect(null, mapDispatchToProps)(CloseComponentUnconnected);
export default withRouter(CloseComponent)
