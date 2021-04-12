// Title: Demo code Drag and Drop
// Location: components.drag-and-drop.html
// Dependency File(s):
// assets/vendor/dragula/dragula.min.css
// assets/vendor/dragula/dragula.min.js
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
    $(function() {
      if (typeof dragula == 'function') {
          dragula([document.querySelector('#column-a'), document.querySelector('#column-b')]);
      }
    });

})(window, document, window.jQuery);
