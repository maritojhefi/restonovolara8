(function(window, document, $, undefined) {
	  "use strict";
	$(function() {

if ($('#slider-range').length) {
	// Initialize slider:
	var rangeSlider = document.getElementById('slider-range');
	var moneyFormat = wNumb({decimals: 0, thousand: ',', prefix: '$'});
	noUiSlider.create(rangeSlider, {
		start: [
			20, 275
		],
		step: 1,
		range: {
			'min': [0],
			'max': [400]
		},
		connect: true,
		format: moneyFormat
	});
	rangeSlider.noUiSlider.on('update', function(values, handle) {
		document.getElementById('slider-range-value1').innerHTML = values[0];
		document.getElementById('slider-range-value2').innerHTML = values[1];
		document.getElementsByName('min-value').value = moneyFormat.from(values[0]);
		document.getElementsByName('max-value').value = moneyFormat.from(values[1]);
	});
};


	});

})(window, document, window.jQuery);
