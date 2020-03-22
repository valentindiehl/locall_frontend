import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import WidgetContainer from "./components/search/WidgetContainer";
import CompanyContainer from "./components/details/CompanyContainer";

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
            businessData: null
        };
    }

    componentDidMount() {

        let data = null;



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

                        console.log(this.businessData);
                    }
                );



                this.map.on('click', 'points', function(e) {
                    var coordinates = e.features[0].geometry.coordinates.slice();
                    var description = e.features[0].properties.description;

                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }

                    new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(description)
                        .addTo(this.map);
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

        console.log(this.businessData);



    }

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
                <WidgetContainer data={this.state.businessData}/>
                <CompanyContainer/>
                <div style={style} ref={el => this.mapContainer = el} className='mapContainer'/>
                </div>
                )}
            </div>
        )
    }
}