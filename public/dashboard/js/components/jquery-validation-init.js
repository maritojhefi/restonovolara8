(function(window, document, $, undefined) {
  "use strict";
  $(function() {

    $("#validate-form").validate({
      highlight: function(element) {
        $(element).closest(".form-group").addClass("has-error")
      },
      unhighlight: function(element) {
        $(element).closest(".form-group").removeClass("has-error")
      },
      errorElement: "span",
      errorClass: "help-block",
      errorPlacement: function(element, e) {
        e.parent(".input-group").length ?
          element.insertAfter(e.parent()) :
          e.parent("label").length ?
          element.insertBefore(e.parent()) :
          element.insertAfter(e)
      }
    })

  });

})(window, document, window.jQuery);
