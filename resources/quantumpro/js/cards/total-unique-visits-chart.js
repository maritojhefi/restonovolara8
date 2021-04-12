(function(window, document, $, undefined) {
  "use strict";
    $(function() {
      new Chartist.Bar(
				"#totalUniqueVisitsChart .ct-chart", {
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
						[2, 4, 3, 6, 3, 5, 2, 7, 5, 3, 5, 6, 9, 4, 5, 1, 3, 5, 8, 3, 2]
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
