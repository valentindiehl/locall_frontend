import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import WidgetContainer from "./components/search/WidgetContainer";
import CompanyContainer from "./components/details/CompanyContainer";
import ThanksContainer from "./components/donation/ThanksContainer";

mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZW50aW5kaWVobCIsImEiOiJjazgxcXIyeXowYWphM2hvdzk4eXZyN2IxIn0.qavBIYB9QaNSECr0RCfhog';

export default class MapPage extends Component {
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
            currentIndex: 1
        };
    }

    componentDidMount() {

        let data = null;

        this.setCurrentIndex2 = this.setCurrentIndex.bind(this);

        fetch('/api/businessdata')
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
                this.map = new mapboxgl.Map({
                    container: this.mapContainer,
                    style: 'mapbox://styles/valentindiehl/ck8267asa0dle1inx25zrtkzc',
                    center: [this.state.lng, this.state.lat],
                    zoom: this.state.zoom
                });
                this.map.on('load', () => {
                        fetch('/api/mapdata')
                            .then(res => res.text())
                            .then(res => {
                                this.map.addSource('points', JSON.parse(res));
                                this.map.addLayer({
                                    'id': 'points',
                                    'type': 'symbol',
                                    'source': 'points',
                                    'layout': {
                                        'icon-image': ['concat', ['get', 'icon'], '-15'],
                                    }
                                });
                            });
                    }
                );



                this.map.on('click', 'points', (e) => {
                    var coordinates = e.features[0].geometry.coordinates.slice();
                    var description = e.features[0].properties.description;

                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }

                    console.log(e.features[0]);
                    this.setState({
                        lng: e.features[0].geometry.coordinates[0],
                        lat: e.features[0].geometry.coordinates[1],
                        currentIndex: e.features[0].properties.id
                    })
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

                this.map.on('mouseenter', 'places', function() {
                    this.map.getCanvas().style.cursor = 'pointer';
                });

// Change it back to a pointer when it leaves.
                this.map.on('mouseleave', 'places', function() {
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
    }

    setCurrentIndex(index) {
        this.setState({
            currentIndex: index
        })
    };

    render() {
        const style = {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%'
        };
        return (
            <div>
            {!this.state.isBusinessLoaded ? (
                <div>Loading
                </div>
                 ) : (
                <div className="contentWrapper">
                <WidgetContainer data={this.state.businessData} curIndex={this.state.currentIndex} selection={this.setCurrentIndex2} />
                <CompanyContainer key={this.state.businessData.data[this.state.currentIndex-1].id} data={this.state.businessData.data[this.state.currentIndex-1]}/>
                <div style={style} ref={el => this.mapContainer = el} className='mapContainer'/>
                </div>
                )}
            </div>
        )
    }
}