// A table represents a chatroom

import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import classnames from 'classnames';


import '../css/table.css';

export default class TableComponent extends Component {

	handleClick = () => {
		this.props.join(this.props.tableId);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {

	}

	render() {
		return (
			<Container onClick={this.handleClick} className={classnames('table', this.props.styleName)}>
				{this.props.tableName}
				<span className="numberParticipants">{this.props.participants}</span>
			</Container>
		);
	}
}
