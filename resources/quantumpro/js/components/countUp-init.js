(function(window, document, $, undefined) {
  "use strict";
    $(function() {
      if ($('.counter').length > 0) {
        $.each($('.counter'), function() {
          var count = $(this).data('count'),
          numAnim = new CountUp(this, 0, count);
          numAnim.start();
        });
      }
    });

})(window, document, window.jQuery);
