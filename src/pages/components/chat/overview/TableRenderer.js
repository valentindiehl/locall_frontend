import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import * as PropTypes from "prop-types";
import JoinTableComponent from "./JoinTableComponent";

/**
 * Stateless component rendering a single table.
 */
export default class TableRenderer extends Component {

	constructor(props) {
		super(props);
	}

	renderTableDescription() {
		return <div className={"tableName"}>
			{this.props.tablePrefixName}<span style={{fontWeight: "bold"}}>tisch</span>
		</div>;
	}

	renderNumberOfParticipants() {
		return <div className="numberParticipants">
			{this.props.participants} {this.props.participants === 1 ? "Person" : "Personen"}
		</div>;
	}

	renderParticipants() {
		const persons = Array(this.props.participants).fill("");
		const renderPersons = persons.slice(0, 3)
		const excessNumber = persons.length - 3;
		return (
			<Container className="participantContainer">
				{this.renderParticipantAvatars(renderPersons)}
				{excessNumber > 0 && <span className="excessNumberParticipants">+{excessNumber}</span>}
			</Container>
		)
	}

	renderParticipantAvatars(renderPersons) {
		return (
			renderPersons.map((person, i) => {
				return (
					<img key={i} alt="Avatar" className={"chatParticipantAvatar"}
						 src={"/assets/icons/profilbild-profilbild-gelb.svg"}/>
				)
			})
		)
	}

	render() {
		return (
			<Col className='table'>
				{this.renderTableDescription()}
				{this.renderNumberOfParticipants()}
				{this.renderParticipants()}
				<JoinTableComponent
					tableId={this.props.tableId}
					participants={this.props.participants}
					handleJoinTable={this.props.handleJoinTable}
				/>
			</Col>
		);
	}
}

TableRenderer.propTypes = {
	/** The prefix name of the table to be rendered. */
	tablePrefixName: PropTypes.string.isRequired,
	/** The number of participants in this table. */
	participants: PropTypes.number.isRequired,
	/** The id of the table to be rendered. */
	tableId: PropTypes.string.isRequired,
	/** Reference to function initiating the process of joining a table. */
	handleJoinTable: PropTypes.func.isRequired
}
