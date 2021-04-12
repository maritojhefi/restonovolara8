// -----------------------------------------------------------------------------
// Title: Payouts
// ID: #ct-LineChart2
// Location: dashboard.financials.html
// Dependency File(s): assets/vendor/chartist/dist/chartist.js
// Docs: https://gionkunz.github.io/chartist-js/api-documentation.html
// -----------------------------------------------------------------------------


(function(window, document, $, undefined) {
  "use strict";
  $(function() {

    if ($('#ct-LineChart2').length > 0) {
      new Chartist.Line('#ct-LineChart2 .ct-chart', {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        series: [
          [10, 5, 15, 20, 19]
        ]
      }, {
        low: 0,
        showArea: true,
        width: '100%',
        height: '300px',
        fullWidth: true,
        chartPadding: {
          bottom: 10,
          right: 20,
          left: 0,
          top: 20
        }
      });
    }

  });

})(window, document, window.jQuery);
