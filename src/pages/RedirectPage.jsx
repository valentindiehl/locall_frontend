import React, {Component} from 'react';


export default class RedirectPage extends Component {

	componentDidMount() {
		console.log(this.props);
		if (this.props.fetched) this.props.history.push('/app');
	}

	render() {
		return null
	}

}
