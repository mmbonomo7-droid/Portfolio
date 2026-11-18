//built based on Leaflet's "quick-start" guide

import {LeafletMap, TileLayer, Marker, Circle, Polygon, Popup, } from 'leaflet';
		// the map code goes here
        const map = new LeafletMap('leaflet').setView([41.52, -88.15], 13)
        new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		const marker = new Marker([41.52,-88.15]).addTo(map);

		const circle = new Circle([41.527, -88.196], {
			color: "blue",
			radius: 500,
		}).addTo(map);
		const polygon = new Polygon([[41.522, -88.186],[41.522, -88.160], [41.536, -88.161], [41.536,-88.179]]).addTo(map);
		const latlon = new Popup();

		function latLongGet(e) {
			latlon
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);
		}
		map.on("click", latLongGet)

        function flyTest() {
            map.flyTo([41.316, -89.037], 13)
        }

        map.on("click", flyTest)