(function(window, document, $, undefined) {
  "use strict";
    $(function() {
      new Chartist.Line(
        "#barChartLineThree .line-chart", {
          labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
          series: [
            [120, 150, 300, 230, 420, 500, 630],
            [150, 280, 240, 300, 220, 380, 420],
            [60, 140, 283, 195, 150, 180, 60]
          ]
        }, {
          low: 0,
          showArea: false,
          showPoint: false,
          showLine: true,
          lineSmooth: false,
          fullWidth: true,
          chartPadding: {
            top: 0,
            right: 10,
            bottom: 0,
            left: 10
          },
          axisX: {
            showLabel: true,
            showGrid: false,
            offset: 30
          },
          axisY: {
            showLabel: true,
            showGrid: true,
            offset: 30
          }
        }
      );
    });

})(window, document, window.jQuery);
