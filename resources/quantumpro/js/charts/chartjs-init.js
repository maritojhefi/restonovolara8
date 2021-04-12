// -----------------------------------------------------------------------------
// Title: Demo code for Chart.js
// Location: charts.chartjs.html
// IDs: #chartjs_lineChart,#chartjs_barChart,#chartjs_radarChart,#chartjs_polarChart,#chartjs_pieChart,#chartjs_doughnutChart
// Dependency File(s): assets/vendor/chart.js/dist/Chart.bundle.min.js
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
	  "use strict";
	$(function() {

		if ($('#chartjs_lineChart').length) {
			var ctx = document.getElementById('chartjs_lineChart').getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
					datasets: [{
						label: 'apples',
						data: [12, 19, 3, 17, 6, 3, 7],
						backgroundColor: "rgba(88, 103, 195,0.4)",
						borderColor: "rgba(88, 103, 195,0.7)",
						borderWidth: .6
					}, {
						label: 'oranges',
						data: [2, 29, 5, 5, 2, 3, 10],
						backgroundColor: "rgba(28, 134, 191,0.4)",
						borderColor: "rgba(28, 134, 191,0.7)",
						borderWidth: .6
					}]
				}
			});
		}


		if ($('#chartjs_barChart').length) {
			var ctx = document.getElementById("chartjs_barChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ["M", "T", "W", "R", "F", "S", "S"],
					datasets: [{
						label: 'apples',
						data: [12, 19, 3, 17, 28, 24, 7],
						backgroundColor: "rgba(88, 103, 195,0.4)"
					}, {
						label: 'oranges',
						data: [30, 29, 5, 5, 20, 3, 10],
						backgroundColor: "rgba(28, 134, 191,0.4)"
					}]
				}
			});
		}

		if ($('#chartjs_radarChart').length) {
			var ctx = document.getElementById("chartjs_radarChart");
			var myChart = new Chart(ctx, {
				type: 'radar',
				data: {
					labels: ["M", "T", "W", "T", "F", "S", "S"],
					datasets: [{
						label: 'apples',
						backgroundColor: "rgba(88, 103, 195,0.4)",
						borderColor: "rgba(88, 103, 195,0.7)",
						data: [12, 19, 3, 17, 28, 24, 7]
					}, {
						label: 'oranges',
						backgroundColor: "rgba(28, 134, 191,0.4)",
						borderColor: "rgba(28, 134, 191,0.7)",
						data: [30, 29, 5, 5, 20, 3, 10]
					}]
				}
			});
		}


		if ($('#chartjs_polarChart').length) {
			var ctx = document.getElementById("chartjs_polarChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'polarArea',
				data: {
					labels: ["M", "T", "W", "T", "F", "S", "S"],
					datasets: [{
						backgroundColor: [
							"#5867C3",
							"#1C86BF",
							"#28BEBD",
							"#FEB38D",
							"#EE6E73",
							"#EC407A",
							"#F8C200"
						],
						data: [12, 19, 3, 17, 28, 24, 7]
					}]
				}
			});
		}


		if ($('#chartjs_pieChart').length) {
			var ctx = document.getElementById("chartjs_pieChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'pie',
				data: {
					labels: ["M", "T", "W", "T", "F", "S", "S"],
					datasets: [{
						backgroundColor: [
							"#5867C3",
							"#1C86BF",
							"#28BEBD",
							"#FEB38D",
							"#EE6E73",
							"#EC407A",
							"#F8C200"
						],
						data: [12, 19, 3, 17, 28, 24, 7]
					}]
				}
			});
		}


		if ($('#chartjs_doughnutChart').length) {
			var ctx = document.getElementById("chartjs_doughnutChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["M", "T", "W", "T", "F", "S", "S"],
					datasets: [{
						backgroundColor: [
							"#5867C3",
							"#1C86BF",
							"#28BEBD",
							"#FEB38D",
							"#EE6E73",
							"#EC407A",
							"#F8C200"
						],
						data: [12, 19, 3, 17, 28, 24, 7]
					}]
				}
			});
		}


	});

})(window, document, window.jQuery);
