(function(window, document, $, undefined) {
  "use strict";
    $(function() {
      new Chartist.Bar(
				"#totalVisitsChart .ct-chart", {
					labels: [
						"A",
						"B",
						"C",
						"D",
						"E",
						"F",
						"G",
						"H",
						"I",
						"J",
						"K",
						"L",
						"M",
						"N",
						"O",
						"P",
						"Q",
						"R",
						"S",
						"T"
					],
					series: [
						[6, 3, 2, 5, 4, 7, 5, 7, 4, 5, 4, 7, 8, 3, 6, 4, 8, 6, 8, 6, 4]
					]
				}, {
					low: 0,
					fullWidth: true,
					chartPadding: {
						top: 0,
						right: 0,
						bottom: 0,
						left: 0
					},
					axisX: {
						showLabel: false,
						showGrid: false,
						offset: 0
					},
					axisY: {
						showLabel: false,
						showGrid: false,
						offset: 0
					}
				}
			);
    });

})(window, document, window.jQuery);
