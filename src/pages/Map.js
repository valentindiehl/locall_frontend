import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import WidgetContainer from "./components/search/WidgetContainer";
import NavBarContainer from "./components/navbar/NavBarContainer";
import RightSideComponent from "./components/rightside/RightSideComponent";
import {Route} from 'react-router-dom';
import FooterContainer from "./components/footer/FooterContainer";
import {socket} from '../App';

import '../pages/css/pages/map.css';


export default class Map extends Component {
    businessData;
    map;

    constructor(props) {
        super(props);
        this.state = {
            lng: 11.5766,
            lat: 48.1418,
            zoom: 12.9,
            isDataLoaded: false,
            isBusinessLoaded: false,
            businessData: null,
            currentIndex: 0,
            navbar: {
                isLoggedIn: true
            },
            mapLoaded: false,
            isLoading: true,
            searchResults: 'undefined',
            map: 'undefined'
        }
        ;
        this.setCurrentIndex = this.setCurrentIndex.bind(this);
        this.setSearchResults = this.setSearchResults.bind(this);
    }

    componentDidMount() {
        // Hack to update user id on socket in backend, this sucks!
        socket.disconnect();
        socket.connect();

        let data = null;

        fetch(process.env.REACT_APP_API_URL + '/api/businesses', {
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        })
            .then(res => {
                data = res.json()
                this.setState({
                    businessData: data
                })
                return data
            })
            .then(res => {
                this.setState({
                    businessData: res,
                    isBusinessLoaded: true
                });

                mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
                this.map = new mapboxgl.Map({
                    container: this.mapContainer,
                    style: 'mapbox://styles/locallmap/ck88sqxsc0hje1inu1glnlnj4',
                    center: [this.state.lng, this.state.lat],
                    zoom: this.state.zoom
                });
                this.map.on('load', () => {
                        fetch(process.env.REACT_APP_API_URL + '/api/geojson', {
                            credentials: 'include'
                        })
                            .then(res => res.json())
                            .then(res => {
                                // add markers to map
                                console.debug(res);

                                res.data.features.forEach((marker) => {
                                    // create a HTML element for each feature
                                    let el = document.createElement('div');
                                    el.className = 'pin pin' + marker.properties.type;
                                    el.addEventListener('click', () => {
                                        let coordinates = marker.geometry.coordinates.slice();

                                        /* while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                                            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                                        } */

                                        const businessId = marker.properties.id;
                                        this.openBusinessDetail(businessId);
                                        this.setState({
                                            lng: coordinates[0],
                                            lat: coordinates[1],
                                            currentIndex: marker.properties.id
                                        });
                                        this.map.flyTo({
                                            center: [
                                                this.state.lng,
                                                this.state.lat
                                            ],
                                            speed: 0.5,
                                            curve: 0,
                                            essential: true
                                        });
                                    });

                                    // make a marker for each feature and add to the map
                                    new mapboxgl.Marker(el)
                                        .setLngLat(marker.geometry.coordinates)
                                        .addTo(this.map);
                                });
                                //this.map.addSource('points', JSON.parse(res));
                                //this.map.addLayer({
                                //    'id': 'points',
                                //    'type': 'symbol',
                                //    'source': 'points',
                                //    'layout': {
                                //        'icon-image': ['concat', ['get', 'icon'], '-15'],
                                //    }
                                //});
                            });
                    }
                );

                this.map.on('mouseenter', 'places', function () {
                    this.map.getCanvas().style.cursor = 'pointer';
                });

                // Change it back to a pointer when it leaves.
                this.map.on('mouseleave', 'places', function () {
                    this.map.getCanvas().style.cursor = '';
                });

                this.map.on('move', () => {
                    this.setState({
                        lng: this.map.getCenter().lng.toFixed(4),
                        lat: this.map.getCenter().lat.toFixed(4),
                        zoom: this.map.getZoom().toFixed(2)
                    });
                });
            });
        this.setState({
            isLoading: false
        })
    }

    setMapMarker() {
        if (this.state.mapLoaded) {
            console.log("setMapMarker");
            this.state.searchResults.forEach((marker) => {
                // create a HTML element for each feature
                let el = document.createElement('div');
                el.className = 'pin pin' + marker.type;
                el.addEventListener('click', () => {
                    let coordinates = marker.coordinates.slice();
                    const businessId = marker.id;
                    this.openBusinessDetail(businessId);
                    this.setState({
                        lng: coordinates[0],
                        lat: coordinates[1],
                        currentIndex: marker.id
                    });
                    this.map.flyTo({
                        center: [
                            this.state.lng,
                            this.state.lat
                        ],
                        speed: 0.5,
                        curve: 0,
                        essential: true
                    });
                });
                console.log(el);
                console.log(marker.coordinates);
                console.log(this.state.map);
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(marker.coordinates)
                    .addTo(this.state.map);
            });

        }
    }

    openBusinessDetail(businessId) {
        this.props.history.push(`/app/company/${businessId}`);
    }

    setSearchResults(data) {
        this.setState({
            searchResults: data
        });
    }

    setCurrentIndex(index) {
        console.debug(index);
        let business = this.state.businessData.data.filter(function (entry) {
            return entry.id === index;
        })[0];
        console.debug(business);
        this.openBusinessDetail(business.id);

        this.setState({
            lat: business.coordinates.lat,
            lng: business.coordinates.lon
        })
        this.map.flyTo({
            center: [
                business.coordinates.lat,
                business.coordinates.lon
            ],
            speed: 0.5,
            curve: 0,
            essential: true
        });

        this.setState({
            currentIndex: index
        })
    }
    ;

    render() {
        //this.setMapMarker();
        const style = {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%'
        };
        return (
            <div className="Fade">
                <NavBarContainer history={this.props.history} navbar={this.state.navbar}/>
                {!this.state.isBusinessLoaded ? (null) : (
                    <div className="contentWrapper">
                        <WidgetContainer data={this.state.businessData.data} curIndex={this.state.currentIndex}
                                         selection={this.setCurrentIndex} searchResults={this.setSearchResults}/>
                        <Route path={"/app/company"} component={RightSideComponent}/>
                        <div style={style} ref={el => this.mapContainer = el} className='mapContainer'/>
                    </div>
                )}
                <FooterContainer isLoggedIn={true}/>
            </div>
        )

    }

}

