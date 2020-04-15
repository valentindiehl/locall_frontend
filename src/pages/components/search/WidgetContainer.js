import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SearchContainer from "./SearchContainer";
import {fetchEvents} from "../../../redux/actions/eventsActions";
import EventHelper from "../../../helpers/event-helper";
import {connect} from "react-redux";

import '../../css/search/widgetContainer.css';



function mapStateToProps(state) {
    return {
        events: state.events.eventsData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchEventData: () => dispatch(fetchEvents())
    }
}

class WidgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myEvents: null
        }

    }

    componentDidMount() {
        this.props.fetchEventData();
    }

    render() {
        return (
            <Container fluid style={{marginTop: -10}} className="widgetContainer">
                <SearchContainer data={this.props.data} events={this.props.events} index={this.props.index}
                                 liveEvents = {EventHelper().currentlyLive(this.props.events)} selection={this.props.selection} changeSearchResults={this.props.changeSearchResults}/>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer)
