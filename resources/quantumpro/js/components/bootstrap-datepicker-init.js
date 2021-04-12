(function(window, document, $, undefined) {
	  "use strict";
	$(function() {

		$('.date-picker-input').datepicker({
			format: 'mm-dd-yyyy',
			autoclose: true,
			orientation: "bottom",
			templates: {
				leftArrow: '<i class="icon dripicons-chevron-left"></i>',
				rightArrow: '<i class="icon dripicons-chevron-right"></i>'
			}
		});

		$('.dp-years').datepicker({
			autoclose: true,
			orientation: "bottom",
			templates: {
				leftArrow: '<i class="icon dripicons-chevron-left"></i>',
				rightArrow: '<i class="icon dripicons-chevron-right"></i>'
			}
		});

		$('.dp-months').datepicker({
			format: 'mm-dd',
			autoclose: true,
			orientation: "bottom",
			templates: {
				leftArrow: '<i class="icon dripicons-chevron-left"></i>',
				rightArrow: '<i class="icon dripicons-chevron-right"></i>'
			}
		});
		$('.helper-datepicker').datepicker({
			todayBtn: "linked",
			clearBtn: true,
			autoclose: true,
			todayHighlight: true,
			orientation: "bottom",
			templates: {
				leftArrow: '<i class="icon dripicons-chevron-left"></i>',
				rightArrow: '<i class="icon dripicons-chevron-right"></i>'
			}
		});

		$('#inline-datepicker').datepicker({
			todayHighlight: true,
			autoclose: true,
			orientation: "bottom",
			templates: {
				leftArrow: '<i class="icon dripicons-chevron-left"></i>',
				rightArrow: '<i class="icon dripicons-chevron-right"></i>'
			}
	});

	});

})(window, document, window.jQuery);
