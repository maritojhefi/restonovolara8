// -----------------------------------------------------------------------------
// Title: Demo code for custom scrollbar options
// Location: components.scrollable.html
// Dependency File(s):
// assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css
// assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
    "use strict";
    $(function() {
			$("[data-scroll='dark']").mCustomScrollbar({
				theme: "dark",
				scrollInertia: 100,
				mouseWheel: {
					preventDefault: true
				}
			});
			$("[data-scroll='dark-3']").mCustomScrollbar({
				theme: "dark-3",
				scrollInertia: 100,
				mouseWheel: {
					preventDefault: true
				}
			});
			$("[data-scroll='minimal-light']").mCustomScrollbar({
				theme: "minimal",
				scrollInertia: 100,
	      mouseWheel: {
	        preventDefault: true
	      }
			});
			$("[data-scroll='light']").mCustomScrollbar({
				theme: "light",
				scrollInertia: 100,
	      mouseWheel: {
	        preventDefault: true
	      }
			});
			$("[data-scroll='light-3']").mCustomScrollbar({
				theme: "light-3",
				scrollInertia: 100,
	      mouseWheel: {
	        preventDefault: true
	      }
			});

    });

})(window, document, window.jQuery);
