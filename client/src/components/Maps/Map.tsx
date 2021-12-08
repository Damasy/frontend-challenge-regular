import React from "react";
import Mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import 'mapbox-gl/dist/mapbox-gl.css';
import '../../index.css';

function Map(props: any) {
  Mapboxgl.accessToken =
    "pk.eyJ1IjoiYWRhbWFzeSIsImEiOiJja3d0NXRzcWYwNXNqMnBtaTRxa2tzOXFnIn0.w9kurY0brb2l_65r6wsCJA";
  const mapContainer:any = React.useRef({});
  const map: any = React.useRef(null);

  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new Mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [props.location.lon, props.location.lat],
      zoom: 8,
    });
    // Create a default Marker and add it to the map.
    new Mapboxgl.Marker()
    .setLngLat([props.location.lon, props.location.lat])
    .addTo(map.current);
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default Map;
