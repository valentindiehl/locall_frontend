import React, {Component} from "react";

export default class TestPage extends Component {
	componentDidMount() {
		console.log("Test page did mount");
	}

	componentWillUnmount() {
		console.log("Test page will unmount")
	}

	render() {
		return <h1>Test Page</h1>
	}
}
