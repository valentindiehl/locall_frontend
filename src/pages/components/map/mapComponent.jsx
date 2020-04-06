import React, {Component} from 'react';
import mapboxgl from "mapbox-gl";


export default class MapComponent extends Component {


    markers = [];
    constructor(props) {
        super(props);

        this.state = {
            lng: 11.5766,
            lat: 48.1418,
            zoom: 12.9,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.index !== this.props.index)
        {
            let prevMarker = document.getElementById('pin-' + prevProps.index);
            let curMarker = document.getElementById('pin-' + this.props.index);
            this.prevIndex = this.props.index;
            let current = this.props.data.filter(obj => { return obj._id === this.props.index})[0];
            if (prevMarker) prevMarker.classList.remove('pin-active');
            curMarker.classList.add('pin-active');
            this.map.flyTo({
                center: [
                    current.coordinates.lat,
                    current.coordinates.lon
                ],
                speed: 0.8,
                curve: 0,
                essential: true
            });
        }
    }

    componentDidMount() {
        this.prevIndex = this.props.index;
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/locallmap/ck88sqxsc0hje1inu1glnlnj4',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
        });

        this.props.data.forEach((marker) => {
            let el = document.createElement('div');
            el.className = 'pin pin' + marker.type.charAt(0).toUpperCase() + marker.type.slice(1);
            el.id = 'pin-' + marker._id;
            el.addEventListener('click', () => {
                let coordinates = [marker.coordinates.lat, marker.coordinates.lon];

                /*while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                } */

                const businessId = marker._id;
                this.props.select(businessId);
            });

            let finalMarker = new mapboxgl.Marker(el)
                .setLngLat([marker.coordinates.lat, marker.coordinates.lon]);
            this.markers.push(finalMarker);
            finalMarker.addTo(this.map);
        });

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
                {this.props.businesses}
                <div style={style} ref={el => this.mapContainer = el} className='mapContainer'/>
            </div>
        )
    }
}