import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import WidgetContainer from "./components/search/WidgetContainer";
import CompanyContainer from "./components/details/CompanyContainer";

mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZW50aW5kaWVobCIsImEiOiJjazgxcXIyeXowYWphM2hvdzk4eXZyN2IxIn0.qavBIYB9QaNSECr0RCfhog';

export default class MapPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 11.5766,
            lat: 48.1418,
            zoom: 12.9,
            isDataLoaded: false
        };
    }

    componentDidMount() {

        let data = null;

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/valentindiehl/ck8267asa0dle1inx25zrtkzc',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        /*map.on('load', () => {
            fetch('/api/mapdata')
                .then(res => res.text())
                .then(res => {
                    map.addSource('points', JSON.parse(res));
                    map.addLayer({
                        'id': 'points',
                        'type': 'symbol',
                        'source': 'points',
                        'layout': {
                            'icon-image': ['concat', ['get', 'icon'], '-15'],
                        }
                    });
                });
            }
        ); */



        map.on('click', 'points', function(e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;

            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
        });

        map.on('mouseenter', 'places', function() {
            map.getCanvas().style.cursor = 'pointer';
        });

// Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', function() {
            map.getCanvas().style.cursor = '';
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        const style = {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%'
        };
        return (

            <div className="contentWrapper">
                <WidgetContainer/>
                <CompanyContainer/>
                <div style={style} ref={el => this.mapContainer = el} className='mapContainer'/>
            </div>
        )
    }
}