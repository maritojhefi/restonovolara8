
(function(window, document, $, undefined) {
  "use strict";
    $(function() {
			if ($('.switch-primary').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-primary'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.primary,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};
			if ($('.switch-accent').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-accent'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.accent,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};
			if ($('.switch-secondary').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-secondary'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.secondary,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};
			if ($('.switch-success').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-success'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.success,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};

			if ($('.switch-info').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-info'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.info,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};
			if ($('.switch-warning').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-warning'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.warning,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};
			if ($('.switch-danger').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-danger'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.danger,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};
    });

})(window, document, window.jQuery);
