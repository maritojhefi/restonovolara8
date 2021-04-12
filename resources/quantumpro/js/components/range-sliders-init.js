(function(window, document, $, undefined) {
	  "use strict";
	$(function() {
		if ($('#slider-danger').length) {
			var sliderDanger = document.getElementById('slider-danger');
			noUiSlider.create(sliderDanger, {
				start: 10,
				connect: [
					true, false
				],
				range: {
					'min': 0,
					'max': 100
				}
			});
		};
		if ($('#slider-warning').length) {
			var sliderWarning = document.getElementById('slider-warning');
			noUiSlider.create(sliderWarning, {
				start: 20,
				connect: [
					true, false
				],
				range: {
					'min': 0,
					'max': 100
				}
			});
		};
		if ($('#slider-info').length) {
			var sliderInfo = document.getElementById('slider-info');
			noUiSlider.create(sliderInfo, {
				start: 40,
				connect: [
					true, false
				],
				range: {
					'min': 0,
					'max': 100
				}
			});
		};
		if ($('#slider-success').length) {
			var sliderSuccess = document.getElementById('slider-success');
			noUiSlider.create(sliderSuccess, {
				start: 10,
				connect: [
					true, false
				],
				range: {
					'min': 0,
					'max': 100
				}
			});
		};
		if ($('#slider-primary').length) {
			var sliderPrimary = document.getElementById('slider-primary');
			noUiSlider.create(sliderPrimary, {
				start: 60,
				connect: [
					true, false
				],
				range: {
					'min': 0,
					'max': 100
				}
			});
		};
		if ($('#slider-danger-vert').length) {
			var sliderDangerVert = document.getElementById('slider-danger-vert');
			noUiSlider.create(sliderDangerVert, {
				start: 10,
				orientation: 'vertical',
				connect: [
					true, false
				],
				range: {
					'min': 0,
					'max': 100
				}
			});
		};
		if ($('#slider-warning-vert').length) {
			var sliderWarningVert = document.getElementById('slider-warning-vert');
			noUiSlider.create(sliderWarningVert, {
				start: 20,
				orientation: 'vertical',
				connect: [
					true, false
				],
				range: {
					'min': 0,
					'max': 100
				}
			});
		};
		if ($('#slider-info-vert').length) {
			var sliderInfoVert = document.getElementById('slider-info-vert');
			noUiSlider.create(sliderInfoVert, {
				start: 40,
				orientation: 'vertical',
				connect: [
					true, false
				],
				range: {
					'min': 0,
					'max': 100
				}
			});
		};
		if ($('#slider-success-vert').length) {
			var sliderSuccessVert = document.getElementById('slider-success-vert');
			noUiSlider.create(sliderSuccessVert, {
				start: 10,
				orientation: 'vertical',
				connect: [
					true, false
				],
				range: {
					'min': 0,
					'max': 100
				}
			});
		};
		if ($('#slider-primary-vert').length) {
			var sliderPrimaryVert = document.getElementById('slider-primary-vert');
			noUiSlider.create(sliderPrimaryVert, {
				start: 60,
				orientation: 'vertical',
				connect: [
					true, false
				],
				range: {
					'min': 0,
					'max': 100
				}
			});
		};
		if ($('#slider-range').length) {
			// Initialize slider:
			var rangeSlider = document.getElementById('slider-range');
			var moneyFormat = wNumb({
				decimals: 0,
				thousand: ',',
				prefix: '$'
			});
			noUiSlider.create(rangeSlider, {
				start: [
					162091, 676818
				],
				step: 1,
				range: {
					'min': [100000],
					'max': [1000000]
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
