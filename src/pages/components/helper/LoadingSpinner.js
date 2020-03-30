import * as React from "react";

export default class LoadingSpinner extends React.Component {
    render() {
        return <img width={this.props.width ? this.props.width : "auto"} src="/assets/icons/loader.gif"
                    alt="animating" id="spinner"/>
    }
}