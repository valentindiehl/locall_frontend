import React, {Component} from "react";
import ApiHelper from "../../../../../helpers/api-helper";
import '../../../../css/chat/chatContainer.css'
import ChatOverviewContentWrapper from "./ChatOverviewContentWrapper";

/**
 * Component wrapping logic and renderers of a chat rooms overview panel.
 * As this component gets all required information from the server via
 * the API or web sockets, it does not have any dedicated props.
 */
export default class ChatOverviewComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			current: {}
		};
	}

	componentDidMount() {
		const {id} = this.props.match.params;
		if (id) this.props.select(id);
		console.log(id);
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
		return <ChatOverviewContentWrapper company={this.state.current}/>
	}
}
