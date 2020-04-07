import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import WidgetContainer from "./components/search/WidgetContainer";
import NavBarContainer from "./components/navbar/NavBarContainer";
import RightSideComponent from "./components/map/rightside/RightSideComponent";
import {Route} from 'react-router-dom';
import FooterContainer from "./components/footer/FooterContainer";
import {socket} from '../App';
import {fetchBusinesses, selectBusiness} from "../redux/actions/businessActions";

import '../pages/css/pages/map.css';
import {connect} from "react-redux";
import MapComponent from './components/map/mapComponent';
import LoadingComponent from "./components/LoadingComponent";

function mapStateToProps(state) {
    return {
        businesses: state.business.businessData,
        fetching: state.business.fetching,
        index: state.business.current,
        prev: state.business.prev,
        fetched: state.business.fetched,
        isSelected: state.business.isSelected,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchBusinesses()),
        select: (index) => dispatch(selectBusiness(index))
    }
};


class Map extends Component {
    businessData;
    map;

    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                isLoggedIn: true,
                searchResults: 'undefined'
            },
        };
        this.changeSearchResults = this.changeSearchResults.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.index !== this.props.index) {
            let business = this.props.businesses.data.filter(obj => {
                return obj._id === this.props.index
            })[0];
            console.log(business);
            this.props.history.push(`/app/company/${business._id}`);
        }
    }

    componentDidMount() {
        // Hack to update user id on socket in backend, this sucks!
        socket.disconnect();
        socket.connect();

        this.props.fetchData();
        console.log(this.props.test);
        console.log(this.props.current);

        setTimeout(() => {console.log(this.props.fetched)}, 5000);

        let data = null;
    }

    changeSearchResults(data) {
        this.setState({
            searchResults: data
        });
    }

    changeSelectedBusiness(data) {
        this.setState({
            index: data
        });
        console.log(this.props.index);
    }


    render() {
        console.log("render map")
        const style = {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%'
        };
        return (
			<div className="Fade">
                <NavBarContainer history={this.props.history} navbar={this.state.navbar}/>
                {this.props.fetched ? (
                <div className="contentWrapper">
                            <WidgetContainer data={this.props.businesses.data} index={this.props.index}
                                             selection={this.props.select} changeSearchResults = {this.changeSearchResults}/>
                            <Route path={"/app/company"} render={(props) => <RightSideComponent {...props} select={this.props.select} data={this.props.businesses.data} index={this.props.index} isOpen={this.props.isSelected}/>} />
                            <MapComponent searchResults = {this.state.searchResults} data={this.props.businesses.data} index={this.props.index} prev={this.props.prev} select={this.props.select}/>
                    </div> ) : <LoadingComponent/> }
                <FooterContainer isLoggedIn={true}/>
            </div>
        )

    }
}

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);
export default MapContainer;
