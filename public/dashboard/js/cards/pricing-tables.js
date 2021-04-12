// -----------------------------------------------------------------------------
// Label: Switch to Annual & Save 20% off.
// ID: #toggle-price
// Location: pages.pricing-tables.html
// Dependency File(s): assets/vendor/switchery-npm/index.js
// Docs: http://abpetkov.github.io/switchery/
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
    "use strict";
  $(function() {
    $('input#toggle-price:checkbox').on('change', function() {
      if ($(this).is(":checked")) {
        $('.pricing-wrapper .card-container').addClass("flipped");
      } else {
        $('.pricing-wrapper .card-container').removeClass("flipped");
      }
    });
  });

})(window, document, window.jQuery);
