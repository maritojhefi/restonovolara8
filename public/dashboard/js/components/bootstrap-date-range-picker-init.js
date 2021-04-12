(function(window, document, $, undefined) {
	  "use strict";
	$(function() {

		$('input[name="dates"]').daterangepicker({
			buttonClasses: 'btn',
			applyClass: 'btn-primary',
			cancelClass: 'btn-secondary'
		});


		$('input[name="daterange"]').daterangepicker({
			opens: 'left',
			buttonClasses: 'btn',
			applyClass: 'btn-primary',
			cancelClass: 'btn-secondary'
		}, function(start, end, label) {
			swal("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));

			swal({
				type: 'success',
				title: 'A new date selection was made:',
				text: start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'),
			})
		});

		$('input[name="datetimes"]').daterangepicker({
			timePicker: true,
			buttonClasses: 'btn',
			applyClass: 'btn-primary',
			cancelClass: 'btn-secondary',
			startDate: moment().startOf('hour'),
			endDate: moment().startOf('hour').add(32, 'hour'),
			locale: {
				format: 'M/DD hh:mm A'
			}
		});



		var start = moment().subtract(29, 'days');
		var end = moment();

		function cb(start, end) {
			$('#reportrange span,#reportrange span i').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
		}

		$('#reportrange').daterangepicker({
			startDate: start,
			endDate: end,
			buttonClasses: 'btn',
			applyClass: 'btn-primary',
			cancelClass: 'btn-secondary',
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			}
		}, cb);

		cb(start, end);



	});

})(window, document, window.jQuery);
