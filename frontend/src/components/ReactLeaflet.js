import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ReactLeaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

class ReactLeafletExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        latitude: -6.240896,
        longitude: 106.830110,
        zoom: 18,
        officeName: 'Jakarta Tendean'
    }

    render() {
        const position = [this.props.latitude, this.props.longitude]
        return (
            <Map center={position} zoom={this.props.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <strong>{this.props.officeName}</strong>
                    </Popup>
                </Marker>
            </Map>
        )
    }
}

export default ReactLeafletExample;