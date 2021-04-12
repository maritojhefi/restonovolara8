// -----------------------------------------------------------------------------
// Title: Monthly budget
// ID: #monthly-budget-2
// Location: dashboard.financials.html
// Dependency File(s):
// assets/vendor/flot/jquery.flot.js
// assets/vendor/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js
// assets/vendor/flot/jquery.flot.resize.js
// assets/vendor/flot/jquery.flot.time.js
// assets/vendor/flot.curvedlines/curvedLines.js
// -----------------------------------------------------------------------------


(function(window, document, $, undefined) {
  "use strict";
    $(function() {

			var data7_1 = [
						[0, 4],
						[1, 8],
						[2, 5],
						[3, 10],
						[4, 4],
						[5, 16],
						[6, 5],
						[7, 11],
						[8, 6],
						[9, 11],
						[10, 20],
						[11, 10],
						[12, 13],
						[13, 4],
						[14, 3],
						[15, 3],
						[16, 4]
					];
					var data7_2 = [
						[0, 1],
						[1, 0],
						[2, 2],
						[3, 0],
						[4, 1],
						[5, 3],
						[6, 1],
						[7, 5],
						[8, 2],
						[9, 3],
						[10, 2],
						[11, 1],
						[12, 5],
						[13, 2],
						[14, 8],
						[15, 3],
						[16, 4]
					];

						$.plot($("#monthly-budget-2 #monthly-budget-content-2"), [{
							data: data7_1,
							label: "Expenses",
							lines: {
								fill: true
							}
						}, {
							data: data7_2,
							label: "Income",
							points: {
								show: true
							},
							lines: {
								show: true
							},
							yaxis: 2
						}], {
							series: {
								lines: {
									show: true,
									fill: true
								},
								curvedLines: {
									apply: true,
									monotonicFit: true,
									active: true
								},
								points: {
									show: true,
									lineWidth: 2,
									fill: true,
									fillColor: "#ffffff",
									symbol: "circle",
									radius: 10
								},
								shadowSize: 0
							},
							grid: {
								hoverable: true,
								clickable: true,
								tickColor: "#e5ebf8",
								borderWidth: 1,
								borderColor: "#e5ebf8"
							},
							colors: [QuantumPro.APP_COLORS.accent, QuantumPro.APP_COLORS.primary],
							tooltip: true,
							tooltipOpts: {
								defaultTheme: false
							},
							xaxis: {
								ticks: [
									[1, "Jan"],
									[2, "Feb"],
									[3, "Mar"],
									[4, "Apr"],
									[5, "May"],
									[6, "Jun"],
									[7, "Jul"],
									[8, "Aug"],
									[9, "Sep"],
									[10, "Oct"],
									[11, "Nov"],
									[12, "Dec"]
								]
							},
							yaxes: [{
							}, {
								position: "right" /* left or right */
							}]
						});
    });

})(window, document, window.jQuery);
