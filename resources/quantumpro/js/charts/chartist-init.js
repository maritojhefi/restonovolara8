// -----------------------------------------------------------------------------
// Title: Demo code for Chartist
// Location: charts.chartist.html
// IDs:#chartist_simplePie,#chartist_pieCustomLabels,#chartist_biPolarBar,
// #chartist_peakCircles,#chartist_horizontalBar,#chartist_stackedBar,
// #chartist_lineChart,#chartist_holesInData,#chartist_onlyWholeNumbers,
// #chartist_lineScatter,#chartist_lineChartWithArea,#chartist_biPolar
// Dependency File(s): assets/vendor/chartist/dist/chartist.js
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
	  "use strict";
	$(function() {
		/*-----------------------------------------------------------------------
		Animating a Donut with Svg.animate
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_animatingDonut').length) {
				var chart = new Chartist.Pie('#chartist_animatingDonut', {
					series: [10, 20, 50, 20, 5, 50, 15],
					labels: [1, 2, 3, 4, 5, 6, 7]
				}, {
					donut: true,
					showLabel: false
				});
				chart.on('draw', function(data) {
					if (data.type === 'slice') {
						// Get the total path length in order to use for dash array animation
						var pathLength = data.element._node.getTotalLength();
						// Set a dasharray that matches the path length as prerequisite to animate dashoffset
						data.element.attr({
							'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
						});
						// Create animation definition while also assigning an ID to the animation for later sync usage
						var animationDefinition = {
							'stroke-dashoffset': {
								id: 'anim' + data.index,
								dur: 1000,
								from: -pathLength + 'px',
								to: '0px',
								easing: Chartist.Svg.Easing.easeOutQuint,
								// We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
								fill: 'freeze'
							}
						};
						// If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
						if (data.index !== 0) {
							animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
						}
						// We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
						data.element.attr({
							'stroke-dashoffset': -pathLength + 'px'
						});
						// We can't use guided mode as the animations need to rely on setting begin manually
						// See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
						data.element.animate(animationDefinition, false);
					}
				});
				// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
				chart.on('created', function() {
					if (window.__anim21278907124) {
						clearTimeout(window.__anim21278907124);
						window.__anim21278907124 = null;
					}
					window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
				});
			}
		})();
		/*-----------------------------------------------------------------------
		Simple Pie Chart
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_simplePie').length) {
				var data = {
					series: [5, 3, 4]
				};
				var sum = function(a, b) {
					return a + b
				};
				new Chartist.Pie('#chartist_simplePie', data, {
					labelInterpolationFnc: function(value) {
						return Math.round(value / data.series.reduce(sum) * 100) + '%';
					}
				});
			}
		})();
		/*-----------------------------------------------------------------------
		Pie Chart with Custom Labels
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_pieCustomLabels').length) {
				var data = {
					labels: ['Bananas', 'Apples', 'Grapes'],
					series: [20, 15, 40]
				};
				var options = {
					labelInterpolationFnc: function(value) {
						return value[0]
					}
				};
				var responsiveOptions = [
					['screen and (min-width: 640px)', {
						chartPadding: 30,
						labelOffset: 100,
						labelDirection: 'explode',
						labelInterpolationFnc: function(value) {
							return value;
						}
					}],
					['screen and (min-width: 1024px)', {
						labelOffset: 80,
						chartPadding: 20
					}]
				];
				new Chartist.Pie('#chartist_pieCustomLabels', data, options, responsiveOptions);
			}
		})();
		/*-----------------------------------------------------------------------
		Bi-polar bar chart
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_biPolarBar').length) {
				var data = {
					labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
					series: [
						[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
					]
				};
				var options = {
					high: 10,
					low: -10,
					axisX: {
						labelInterpolationFnc: function(value, index) {
							return index % 2 === 0 ? value : null;
						}
					}
				};
				new Chartist.Bar('#chartist_biPolarBar', data, options);
			}
		})();
		/*-----------------------------------------------------------------------
		Peak circles using the draw events
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_peakCircles').length) {
				// Create a simple bi-polar bar chart
				var chart = new Chartist.Bar('#chartist_peakCircles', {
					labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
					series: [
						[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
					]
				}, {
					high: 10,
					low: -10,
					axisX: {
						labelInterpolationFnc: function(value, index) {
							return index % 2 === 0 ? value : null;
						}
					}
				});
				// Listen for draw events on the bar chart
				chart.on('draw', function(data) {
					// If this draw event is of type bar we can use the data to create additional content
					if (data.type === 'bar') {
						// We use the group element of the current series to append a simple circle with the bar peek coordinates and a circle radius that is depending on the value
						data.group.append(new Chartist.Svg('circle', {
							cx: data.x2,
							cy: data.y2,
							r: Math.abs(Chartist.getMultiValue(data.value)) * 2 + 5
						}, 'ct-slice-pie'));
					}
				});
			}
		})();
		/*-----------------------------------------------------------------------
		Stacked Bar Chart
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_stackedBar').length) {
				new Chartist.Bar('#chartist_stackedBar', {
					labels: ['Q1', 'Q2', 'Q3', 'Q4'],
					series: [
						[800000, 1200000, 1400000, 1300000],
						[200000, 400000, 500000, 300000],
						[100000, 200000, 400000, 600000]
					]
				}, {
					stackBars: true,
					axisY: {
						labelInterpolationFnc: function(value) {
							return (value / 1000) + 'k';
						}
					}
				}).on('draw', function(data) {
					if (data.type === 'bar') {
						data.element.attr({
							style: 'stroke-width: 30px'
						});
					}
				});
			}
		})();
		/*-----------------------------------------------------------------------
		Horizontal bar chart
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_horizontalBar').length) {
				new Chartist.Bar('#chartist_horizontalBar', {
					labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
					series: [
						[5, 4, 3, 7, 5, 10, 3],
						[3, 2, 9, 5, 4, 6, 4]
					]
				}, {
					seriesBarDistance: 10,
					reverseData: true,
					horizontalBars: true,
					axisY: {
						offset: 70
					}
				});
			}
		})();

		/*-----------------------------------------------------------------------
		Simple line chart
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_lineChart').length) {
				new Chartist.Line('#chartist_lineChart', {
					labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
					series: [
						[12, 9, 7, 8, 5],
						[2, 1, 3.5, 7, 3],
						[1, 3, 4, 5, 6]
					]
				}, {
					fullWidth: true,
					chartPadding: {
						right: 40
					}
				});
			}
		})();
		/*-----------------------------------------------------------------------
		Holes in data
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_holesInData').length) {
				var chart = new Chartist.Line('#chartist_holesInData', {
					labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
					series: [
						[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
						[10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
						[null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null],
						[{
							x: 3,
							y: 3
						}, {
							x: 4,
							y: 3
						}, {
							x: 5,
							y: undefined
						}, {
							x: 6,
							y: 4
						}, {
							x: 7,
							y: null
						}, {
							x: 8,
							y: 4
						}, {
							x: 9,
							y: 4
						}]
					]
				}, {
					fullWidth: true,
					chartPadding: {
						right: 10
					},
					low: 0
				});
			}
		})();
		/*-----------------------------------------------------------------------
		Only whole numbers
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_onlyWholeNumbers').length) {
				new Chartist.Line('#chartist_onlyWholeNumbers', {
					labels: [1, 2, 3, 4, 5, 6, 7, 8],
					series: [
						[1, 2, 3, 1, -2, 0, 1, 0],
						[-2, -1, -2, -1, -3, -1, -2, -1],
						[0, 0, 0, 1, 2, 3, 2, 1],
						[3, 2, 1, 0.5, 1, 0, -1, -3]
					]
				}, {
					high: 3,
					low: -3,
					fullWidth: true,
					// As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
					axisY: {
						onlyInteger: true,
						offset: 20
					}
				});
			}
		})();
		/*-----------------------------------------------------------------------
		Line scatter diagram with responsive settings
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_lineScatter').length) {
				var times = function(n) {
					return Array.apply(null, new Array(n));
				};
				var data = times(52).map(Math.random).reduce(function(data, rnd, index) {
					data.labels.push(index + 1);
					data.series.forEach(function(series) {
						series.push(Math.random() * 100)
					});
					return data;
				}, {
					labels: [],
					series: times(4).map(function() {
						return new Array()
					})
				});
				var options = {
					showLine: false,
					axisX: {
						labelInterpolationFnc: function(value, index) {
							return index % 13 === 0 ? 'W' + value : null;
						}
					}
				};
				var responsiveOptions = [
					['screen and (min-width: 640px)', {
						axisX: {
							labelInterpolationFnc: function(value, index) {
								return index % 4 === 0 ? 'W' + value : null;
							}
						}
					}]
				];
				new Chartist.Line('#chartist_lineScatter', data, options, responsiveOptions);
			}
		})();
		/*-----------------------------------------------------------------------
		Line chart with area
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_lineChartWithArea').length) {
				new Chartist.Line('#chartist_lineChartWithArea', {
					labels: [1, 2, 3, 4, 5, 6, 7, 8],
					series: [
						[5, 9, 7, 8, 5, 3, 5, 4]
					]
				}, {
					low: 0,
					showArea: true
				});
			}
		})();
		/*-----------------------------------------------------------------------
		Bi-polar Line chart with area only
		-----------------------------------------------------------------------*/
		(function() {
			if ($('#chartist_biPolar').length) {
				new Chartist.Line('#chartist_biPolar', {
					labels: [1, 2, 3, 4, 5, 6, 7, 8],
					series: [
						[1, 2, 3, 1, -2, 0, 1, 0],
						[-2, -1, -2, -1, -2.5, -1, -2, -1],
						[0, 0, 0, 1, 2, 2.5, 2, 1],
						[2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
					]
				}, {
					high: 3,
					low: -3,
					showArea: true,
					showLine: false,
					showPoint: false,
					fullWidth: true,
					axisX: {
						showLabel: false,
						showGrid: false
					}
				});
			}
		})();

	});

})(window, document, window.jQuery);
