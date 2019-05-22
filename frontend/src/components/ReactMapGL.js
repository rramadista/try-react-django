import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

export default class ReactMap extends Component {

    state = {
        viewport: {
            width: 1024,
            height: 400,
            latitude: -6.240896,
            longitude: 106.83011,
            zoom: 18
        }
    };

    render() {
        return (
            <ReactMapGL
                mapStyle="https://openmaptiles.github.io/osm-bright-gl-style/style-cdn.json"
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
            />
        );
    }
}