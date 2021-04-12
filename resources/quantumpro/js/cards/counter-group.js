// -----------------------------------------------------------------------------
// Titles: Active Sessions, Add to cart, Newsletter Sign Ups, Total Revenue
// Location: index.html
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
  $(function() {
    $(".progress-active-sessions .progress-bar").animate({
      width: "72%"
    }, 400);
    $(".progress-add-to-cart .progress-bar").animate({
      width: "67%"
    }, 400);
    $(".progress-new-account .progress-bar").animate({
      width: "83%"
    }, 400);
    $(".progress-total-revenue .progress-bar").animate({
      width: "77%"
    }, 400);

  });

})(window, document, window.jQuery);
