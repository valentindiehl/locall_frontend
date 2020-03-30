import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import CloseComponent from "../rightside/CloseComponent";
import RightSideActionComponent from "../rightside/RightSideActionComponent";

import '../../css/chat/chatContainer.css'
import ChatRoomContainer from "./ChatRoomContainer";

export default class ChatContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log("Chat Did mount");
		const {id} = this.props.match.params;
		fetch(process.env.REACT_APP_API_URL + "/api/businesses/" + id, {
			headers: {
				'content-type': 'application/json'
			},
			credentials: "include"
		}).then(res => {
			return res.json()
		}).then(res => {

			this.setState({company: res});
		});
	}

	render() {
		return (
			<div>
				<RightSideActionComponent renderBack={true}/>
				<Container className="chatContainer">
					<h1>Voice Chat <span title={"Dieses Feature ist noch in der frühen Entwicklung und kann Fehler beinhalten."} className={'version'}>Alpha</span> </h1>
					{!!this.state.company && <h6>{this.state.company.name}</h6>}
					<ChatRoomContainer company={this.state.company}/>
				</Container>
			</div>
		)
	}
}
