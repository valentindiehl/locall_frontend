import React, {Component} from "react";
import ApiHelper from "../../../../helpers/api-helper";
import '../../../css/chat/chatContainer.css'
import ChatOverviewContentWrapper from "./ChatOverviewContentWrapper";

/**
 * Component wrapping logic and renderers of a chat rooms overview panel.
 * As this component gets all required information from the server via
 * the API or web sockets, it does not have any dedicated props.
 */
export default class ChatOverviewComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const {id} = this.props.match.params;
		ApiHelper().fetchCompany(id, (res => this.setState({company: res})));
	}

	render() {
		return <ChatOverviewContentWrapper company={this.state.company}/>
	}
}
