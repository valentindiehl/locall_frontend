import React from "react";
import RightSideActionComponent from "../../rightside/RightSideActionComponent";
import Container from "react-bootstrap/Container";
import ChatOverviewDescriptionRenderer from "./ChatOverviewDescriptionRenderer";
import LoadingComponent from "../../../LoadingComponent";
import * as PropTypes from "prop-types";
import ChatRoomsComponent from "./ChatRoomsComponent";

/**
 * Stateless component rendering the basic structure of the chat overview panel.
 */
const ChatOverviewContentWrapper = (props) => {
	return (
		<div>
			<RightSideActionComponent renderBack={true}/>
			<Container className="chatContainer">
				{!!props.company && <ChatOverviewDescriptionRenderer name={props.company.name}/>}
				{!props.company && <LoadingComponent/>}
				<ChatRoomsComponent company={props.company}/>
			</Container>
		</div>
	)
}

ChatOverviewContentWrapper.propTypes = {
	/** Object holding information about the selected company. */
	company: PropTypes.shape({
		/** The name of the selected company. */
		name: PropTypes.string.isRequired
	})
}

export default ChatOverviewContentWrapper
