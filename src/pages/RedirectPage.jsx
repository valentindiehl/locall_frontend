import React, { Component } from 'react';


export default class RedirectPage extends Component {

    componentDidMount() {
        console.log(this.props);
        if (this.props.fetched && this.props.isLoggedIn) this.props.history.push('/app');
        else if (this.props.fetched && !this.props.isLoggedIn) this.props.history.push('/login');
    }

    render() {
        return (
            <div></div>
        )
    }

}