// -----------------------------------------------------------------------------
// Title: New Sessions by Location
// ID: #world-map
// Location: dashboard.analytics.html
// Dependency File(s):
// assets/vendor/jvectormap-next/jquery-jvectormap.min.js
// assets/vendor/jvectormap-next/jquery-jvectormap-world-mill.js
// -----------------------------------------------------------------------------
(function(window, document, $, undefined) {
    "use strict";
    $(function() {
			$('#world-map').vectorMap({
			  map: 'world_mill_en',
			  scaleColors: ['#F54086', '#695DB5'],
			  normalizeFunction: 'polynomial',
			  focusOn: {
			    x: 5,
			    y: 1,
			    scale: .85
			  },
			  zoomOnScroll: false,
			  zoomMin: 0.65,
			  hoverColor: false,
			  regionStyle: {
			    initial: {
			      fill: '#c5d5ea',
			      "fill-opacity": 1,
			      stroke: '#c5d5ea',
			      "stroke-width": 0,
			      "stroke-opacity": 0
			    },
			    hover: {
			      "fill-opacity": 0.6
			    }
			  },
			  markerStyle: {
			    initial: {
			      fill: '#695DB5 ',
			      stroke: '#b3ace5',
			      "fill-opacity": 1,
			      "stroke-width": 6,
			      "stroke-opacity": 0.8,
			      r: 3
			    },
			    hover: {
			      stroke: '#b3ace5',
			      "stroke-width": 10
			    },
			    selected: {
			      fill: 'blue'
			    },
			    selectedHover: {}
			  },
			  backgroundColor: '#ffffff',
			  markers: [
					{latLng: [41.50, -87.37], name: 'Chicago'},
			    {latLng: [32.46, -96.46], name: 'Dallas'},
			    {latLng: [36.10, -115.12], name: 'Las Vegas'},
			    {latLng: [34.3, -118.15], name: 'Los Angeles'},
			    {latLng: [40.43, -74.00], name: 'New York City'},
			    {latLng: [48.8566,2.3522], name: 'Paris, France'},
			    {latLng: [-33.86785,151.2093], name: 'Sydney, Australia'},
					{latLng: [-33.918861,18.423300], name: 'Cape Town, South Africa'}
			  ]
			});

    });

})(window, document, window.jQuery);
