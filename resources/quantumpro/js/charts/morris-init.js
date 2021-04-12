// -----------------------------------------------------------------------------
// Title: Demo code for Morris.js
// Location: charts.morrisjs.html
// IDs: #morris_area_chart,#morris_line_chart,#morris_bar_chart,#morris_stacked,#morris_pie_chart
// Dependency File(s):
// assets/vendor/raphael/raphael.js
// assets/vendor/morrisjs/morris.js
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
	$(function() {

		if ($('#morris_area_chart').length && $('#morris_line_chart').length && $('#morris_bar_chart').length && $('#morris_stacked').length && $('#morris_pie_chart').length) {
			var data = [{
				y: '2016',
				a: 35,
				b: 90
			}, {
				y: '2017',
				a: 45,
				b: 75
			}, {
				y: '2018',
				a: 55,
				b: 50
			}, {
				y: '2019',
				a: 65,
				b: 60
			}, {
				y: '2020',
				a: 75,
				b: 65
			}, {
				y: '2021',
				a: 90,
				b: 70
			}, {
				y: '2022',
				a: 95,
				b: 75
			}, {
				y: '2023',
				a: 105,
				b: 75
			}, {
				y: '2024',
				a: 115,
				b: 85
			}, {
				y: '2025',
				a: 125,
				b: 85
			}, {
				y: '2026',
				a: 145,
				b: 95
			}],
			config = {
				data: data,
				xkey: 'y',
				ykeys: ['a', 'b'],
				labels: ['Total Income', 'Total Outcome'],
				fillOpacity: 0.6,
				hideHover: 'auto',
				behaveLikeLine: true,
				resize: true,
				pointFillColors: ['#ffffff'],
				pointStrokeColors: ['black'],
				lineColors: [QuantumPro.APP_COLORS.primary, QuantumPro.APP_COLORS.success],
				barColors: [QuantumPro.APP_COLORS.primary, QuantumPro.APP_COLORS.success]
			};
			config.element = 'morris_area_chart';
			Morris.Area(config);
			config.element = 'morris_line_chart';
			Morris.Line(config);
			config.element = 'morris_bar_chart';
			Morris.Bar(config);
			config.element = 'morris_stacked';
			config.stacked = true;
			Morris.Bar(config);
			Morris.Donut({
				element: 'morris_pie_chart',
				data: [{
					label: "Study",
					value: 30
				}, {
					label: "Sleep",
					value: 15
				}, {
					label: "Work",
					value: 45
				}, {
					label: "Eat",
					value: 10
				}],
				colors: [QuantumPro.APP_COLORS.success, QuantumPro.APP_COLORS.grey800, QuantumPro.APP_COLORS.primary, QuantumPro.APP_COLORS.grey500]
			});
		}

	});

})(window, document, window.jQuery);
