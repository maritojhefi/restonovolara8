/*
*
* QuantumPro
* Author: http://authenticgoods.co
*
*/
// -----------------------------------------------------------------------------
// 1. GLOBAL CONSTANTS
// -----------------------------------------------------------------------------
(function(window, document, $, undefined) {
  "use strict";
  var QuantumPro = window.QuantumPro || (window.QuantumPro = {});
  if (Modernizr.touchevents) {
    QuantumPro.APP_TOUCH = true;
  } else {
    QuantumPro.APP_TOUCH = false;
  }
  QuantumPro.APP_MEDIAQUERY = {
    XLARGE: "1280px",
    LARGE: "992px",
    MEDIUM: "768px",
    SMALL: "576px",
    XSMALL: "0px"
  };
  QuantumPro.APP_COLORS = {
    primary: "#7468bd",
    secondary: "#8da6c3",
    accent: "#F64A91",
    info: "#42a4f4",
    warning: "#FFCE67",
    danger: "#ff5c75",
    success: "#2fbfa0",
    grey50: "#f0f6ff",
    grey100: "#dde9f5",
    grey200: "#cbdaea",
    grey300: "#b6cade",
    grey400: "#a4bad1",
    grey500: "#93acc6",
    grey600: "#839bb3",
    grey700: "#718599",
    grey800: "#617182",
    grey900: "#4d5a68"
  };

  // Option to persist settings
  // ----------------------------------
  var persistSettings = true;
  var $html = $("html"),
  $body = $("body");
  if (persistSettings) {
    //Setup some default layout options on app start.
    //Let's check if localStorage is available and persist our settings,
    if (typeof localStorage !== "undefined") {
      //Global namespace for sessionStorage,localStorage, and cookieStorage
      window.appConfig = Storages.initNamespaceStorage("appConfig");
    }
  }
  window.app = {
    persist: persistSettings,
    config: {
      isTouch: function isTouch() {
        return $html.hasClass("touch");
      }
    }
  };

  // debounce
  // --------------------
  window.debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
      args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };



  // Switching theme color demo
  // ----------------------------------------

  $('[data-load-css]').on('click', function(e) {
    var element = $(this);
    if (element.is('a'))
    e.preventDefault();
    var uri = element.data('loadCss'),
    link;
    if (uri) {
      link = swapStyleSheet(uri);
      if (!link) {
        $.error('Error creating stylesheet link element.');
      }
    } else {
      $.error('No stylesheet location defined.');
    }
  });


  var swapStyleSheet = function(uri) {
    var linkId = 'autoloaded-stylesheet',
    oldLink = $('#' + linkId).attr('id', linkId + '-old');
    $('head').append($('<link/>').attr({
      'id': linkId,
      'rel': 'stylesheet',
      'href': uri
    }));
    if (oldLink.length) {
      oldLink.remove();
    }
    return $('#' + linkId);
  };

  // Switching layout mode demo
  // ----------------------------------------

  $('input[name=layoutMode]').on('click', function() {
    if ($('body').hasClass('layout-fixed')) {
      $('body').removeClass('layout-fixed');
    }
    let getVal = $(this).val();
    $('body').addClass(getVal);
  });



  var $openCtrl = $('#button-search'),
  $closeCtrl = $('#button-search-close'),
  $searchContainer = $('.fullpage-search-wrapper'),
  $inputSearch = $('.search__input');

  function init() {
    initEvents();
  }

  function initEvents() {

    $openCtrl.on('click', function() {
      openSearch();
    });
    $closeCtrl.on('click', function() {
      closeSearch();
    });
    $(document).on('keyup', function(ev) {
      // escape key.
      if (ev.keyCode == 27) {
        closeSearch();
      }
    });
  }

  function openSearch() {
    $searchContainer.addClass('search--open');
    $inputSearch.focus();
  }

  function closeSearch() {
    $searchContainer.removeClass('search--open');
    $inputSearch.blur();
    $inputSearch.val('');
  }

  init();

})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// 2. App Sidebars
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
  $(function() {
    // init sidebars
    // --------------------
    $(".nav.metismenu").metisMenu();
    // switch sidebar state mobile/desktop based on breakpoints
    // ----------------------------------------------------------
    var switchMenuState = function() {
      var $body = $("body"),
      $menuHeaderControls = $(".header-controls");
      if ($(window).width() < 992) {
        $body.removeClass("mini-sidebar");
        $menuHeaderControls.hide();
      } else if ($(window).width() > 992) {
        $body.removeClass("aside-left-open");
        $menuHeaderControls.show();
      }
    };
    $(window).on("resize", function() {
      debounce(switchMenuState, 300, false)();
    });
    // If sidebar is set to static
    // ------------------------------------------------
    if($("body.fixed-menu")){
      $("body.fixed-menu .main-menu").mCustomScrollbar({
        theme: "minimal-dark",
        scrollInertia: 100,
        setTop: "-999999px",
        mouseWheel: {
          preventDefault: true
        }
      });
    }

    // Toggle menu states
    // ----------------------------------
    var $toggleElement = $("[data-toggle-state]");
    $("[data-toggle-state]").on("click", function(e) {
      e.stopPropagation();
      var $body = $("body"),
      element = $(this),
      className = element.data("toggleState"),
      //key = element.data('key'),
      $target = $body;
      if (className) {
        if ($target.hasClass(className)) {
          $target.removeClass(className);
        } else {
          $target.addClass(className);
        }
      }
      menuIconState(className);
      backdropState(className);
    });

    // Toggle menu icon on Default Menu open/close
    // ----------------------------------
    var menuIconState = function(className) {
      if (className === "mini-sidebar") {
        if ($("body.mini-sidebar").length > 0) {
          $('[data-toggle-state="mini-sidebar"] > i')
          .removeClass("la-dot-circle-o")
          .addClass("la-circle");
        } else {
          $('[data-toggle-state="mini-sidebar"] > i')
          .removeClass("la-circle")
          .addClass("la-dot-circle-o");
        }
      }
    };
    // Load backdrop when sidebar is open
    // ----------------------------------
    var backdropState = function(className) {
      var backDrop =
      '<div class="aside-overlay-fixed" data-aos="fade-in" data-aos-duration="300"></div>';
      if (
        $("body.aside-right-open").length > 0 ||
        $("body.aside-left-open").length > 0 ||
        $("body.mail-compose-open").length > 0
      ) {
        $("body").append(backDrop);
        $(".aside-overlay-fixed").on("click", function() {
          $(this)
          .fadeOut("fast")
          .remove();
          $("body").removeClass(
            "aside-right-open aside-left-open mail-compose-open"
          );
        });
      }
    };
  });
})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// 3. General actions
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
  $(function() {
    $("[data-q-action]").on("click", function(e) {
      e.stopPropagation();
      var $this = $(this),
      action = $(this).data("q-action"),
      $card = $(this).parents(".card");

      switch (action) {
        /*-----------------------------------------------------------------------
        Site Search Open/Close
        -----------------------------------------------------------------------*/
        /**
        * Action: Open
        **/
        case "open-site-search":
        var $target = $(".top-toolbar.navbar-desktop .navbar-form");
        $target.find(".navbar-search").focus();
        $target.addClass("open");

        break;

        /**
        * Action: Close
        **/
        case "close-site-search":
        var $target = $(".top-toolbar .navbar-form");
        $target.find(".navbar-search").val("");
        $target.removeClass("open");

        break;

        /*-----------------------------------------------------------------------
        Notifications Open/Close Config
        -----------------------------------------------------------------------*/
        /**
        * Action: Open
        **/
        case "open-notifi-config":
        $this
        .children(".icon")
        .toggleClass("dripicons-gear dripicons-arrow-thin-left");
        $this.data("q-action", "close-notifi-config");
        var $target = $this
        .closest(".card")
        .find(".card-container-wrapper .card-container");

        $target.animate({
          left: "-300px"
        },
        400
      );

      break;

      /**
      * Action: Close
      **/
      case "close-notifi-config":
      $this
      .children(".icon")
      .toggleClass("dripicons-arrow-thin-left dripicons-gear");
      $this.data("q-action", "open-notifi-config");
      var $target = $this
      .closest(".card")
      .find(".card-container-wrapper .card-container");

      $target.animate({
        left: "0px"
      },
      400
    );

    break;

    /*-----------------------------------------------------------------------
    Template Page Sidebars
    -----------------------------------------------------------------------*/
    /**
    * Action: Open/Close
    **/
    case "page-aside-right-open":
    if (
      Modernizr.mq("(max-width: " + QuantumPro.APP_MEDIAQUERY.XLARGE + ")")
    ) {
      var $target = $(".aside-right"),
      $backdropTarget = $("body");

      $target.toggleClass("open");

      var addClickEvent = function() {
        $(".aside-overlay-fixed").on("touchend click", function(e) {
          $(this)
          .fadeOut("fast")
          .remove();
          $target.removeClass("open");
          return false;
        });
      };
      if ($target.hasClass("open")) {
        var backDrop =
        '<div class="aside-overlay-fixed" data-aos="fade-in" data-aos-duration="300"></div>';
        $backdropTarget.append(backDrop);
        addClickEvent();
      } else {
        $(".aside-overlay-fixed").trigger("click");
      }
    }

    break;

    /**
    * Action: Open/Close
    **/
    case "page-aside-left-open":
    if (Modernizr.mq("(max-width:992px)")) {
      var $target = $(".aside-left"),
      $backdropTarget = $("body");

      $target.toggleClass("open");

      var addClickEvent = function() {
        $(".aside-overlay-fixed").on("touchend click", function(e) {
          $(this)
          .fadeOut("fast")
          .remove();
          $target.removeClass("open");
          return false;
        });
      };

      if ($target.hasClass("open")) {
        var backDrop =
        '<div class="aside-overlay-fixed" data-aos="fade-in" data-aos-duration="300"></div>';
        $backdropTarget.append(backDrop);
        addClickEvent();
      } else {
        $(".aside-overlay-fixed").trigger("click");
      }
    }

    break;

    /*-----------------------------------------------------------------------
    Card Actions
    -----------------------------------------------------------------------*/
    /**
    * Action: Expand Fullscreen
    **/
    case "card-expand":
    $card.toggleClass(action);
    $this
    .children("i")
    .toggleClass("dripicons-expand-2 icon dripicons-contract-2");
    break;
    /**
    * Action: Remove
    **/
    case "card-remove":
    $card.fadeOut();
    break;
    /**
    * Action: Collapse
    **/
    case "card-collapsed":
    $card.toggleClass(action);
    $card.find(".card-body").slideToggle();
    $this.children("i").toggleClass("collapsedRotate");
    break;
  }
});
});
})(window, document, window.jQuery);
//----some cleanup checks
var removeBackdrop = function() {
  if ($("#3-col-wrapper").length) {
    var $targetRight = $("#3-col-wrapper .aside-right");
    ($targetLeft = $("#3-col-wrapper .aside-left")),
    ($backdropTarget = $("#3-col-wrapper"));
    if (
      $targetRight.hasClass("open") &&
      Modernizr.mq("(min-width: " + QuantumPro.APP_MEDIAQUERY.XLARGE + ")")
    ) {
      $(".aside-overlay-absolute").remove();
      $targetRight.removeClass("open");
    }
    if ($targetLeft.hasClass("open") && Modernizr.mq("(max-width: 670px)")) {
      $(".aside-overlay-absolute").remove();
      $targetLeft.removeClass("open");
    }
  }
};
$(window).on("resize", function() {
  debounce(removeBackdrop, 300, false)();
});
//----end cleanup checks
// -----------------------------------------------------------------------------
// 4. UI Blocking
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
  $(function() {
    $("body").on("click", "[data-qt-block]", function(e) {
      e.stopPropagation();
      var $this = $(this),
      target = $(this).data("qt-block");

      switch (target) {
        /*-----------------------------------------------------------------------
        Element blocking
        -----------------------------------------------------------------------*/
        /**
        * Action: Open
        **/
        case ".block-el":
        var $blockTarget = $(this)
        .parents(".card")
        .find(target);
        $blockTarget.append('<div class="qt-block-ui"></div>');
        var $block = $blockTarget.find(".qt-block-ui");
        setTimeout(function() {
          $block.fadeOut("3000", function() {
            $block.remove();
          });
        }, 1700);

        break;
        /*-----------------------------------------------------------------------
        Form blocking
        -----------------------------------------------------------------------*/
        case "#block-form":
        $(target).submit(function(event) {
          event.preventDefault();
          $(target)
          .find("input")
          .attr("disabled", "disabled");
          $this.addClass("btn-block-ui").attr("disabled", "disabled");
          setTimeout(function() {
            $(target)
            .find("input")
            .attr("disabled", false)
            .val("");
            $this.removeClass("btn-block-ui").attr("disabled", false);
          }, 3000);
          return true;
        });

        break;
        /*-----------------------------------------------------------------------
        Full Page Blocking
        -----------------------------------------------------------------------*/
        case "body":
        $(target).append('<div class="qt-block-ui"></div>');
        var $block = $(".qt-block-ui");
        setTimeout(function() {
          $block.fadeOut("3000", function() {
            $block.remove();
          });
        }, 1700);

        break;
      }
    });
  });
})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// 5. GLOBAL INIT SNIPPETS
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
  $(function() {
    // Smooth Scroll
    // ----------------------------------
    if ($('a.smooth-scroll[href*="#"]:not([href="#"])').length > 0) {
      $('a.smooth-scroll[href*="#"]:not([href="#"])').on('click',function() {
        if($(this).parents('ul').hasClass('doc-menu')){
          $('.doc-menu li').removeClass('active');
           $(this).parent('li').addClass('active')
        }

        if (
          location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ?
          target :
          $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            $("html, body").animate({
              scrollTop: target.offset().top - 75
            },500);
          return false;
        }
      }
    });
  }

  // Filter Toolbar Dropdown Menu
  // ----------------------------------
  if ($(".filter-input").length > 0) {
    var $filterInput = $(".filter-input"),
    $filterList = $("ul.filter-list li a.dropdown-item"),
    $clearList = $(".clear-filter");
    $clearList.hide();
    $filterInput.on("keyup", function() {
      var value = $(this)
      .val()
      .toLowerCase();
      $filterList.filter(function() {
        $(this).toggle(
          $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
        );
        $clearList.show();
        if (!$filterInput.val().length) {
          $clearList.hide();
        }
      });
    });

    $clearList.on("click", function() {
      $(this).hide();
      $filterInput.val("");
      $filterList.fadeIn();
    });
  }

  // Custom Scrollbar
  // ----------------------------------
  if ($("[data-scroll='minimal-dark']").length > 0 && $("[data-scroll='minimal-dark']").hasClass('scroll-bottom')) {
    $("[data-scroll='minimal-dark']").mCustomScrollbar({
      theme: "minimal-dark",
      scrollInertia: 100,
      setTop: "-999999px",
      mouseWheel: {
        preventDefault: true
      }
    });
  } else if ($("[data-scroll='minimal-dark']").length > 0) {
    $("[data-scroll='minimal-dark']").mCustomScrollbar({
      theme: "minimal-dark",
      scrollInertia: 100,
      mouseWheel: {
        preventDefault: true
      }
    });
  }
  if ($("[data-scroll='minimal']").length > 0) {
    $("[data-scroll='minimal']").mCustomScrollbar({
      theme: "minimal",
      scrollInertia: 100,
      mouseWheel: {
        preventDefault: true
      }
    });
  }
  if ($("[data-scroll='minimal-light']").length > 0) {
    $("[data-scroll='minimal-light']").mCustomScrollbar({
      theme: "minimal-light",
      scrollInertia: 100,
      mouseWheel: {
        preventDefault: true
      }
    });
  }
  // Modal Custom Scrollbar
  // ----------------------------------
  if ($('[data-modal="scroll"]').length > 0) {
    $('[data-modal="scroll"]').on("shown.bs.modal", function() {
      $(".modal-body").mCustomScrollbar({
        theme: "minimal-dark"
      });
    });
  }

  // Initialize the switchery plugin
  // ----------------------------------
  if ($(".js-switch").length > 0) {
    var elems = Array.prototype.slice.call($(".js-switch"));
    elems.forEach(function(html) {
      var switchery = new Switchery(html, {
        size: "small",
        color: QuantumPro.APP_COLORS.primary,
        secondaryColor: QuantumPro.APP_COLORS.lightergrey
      });
    });
  }

  // Keep the dropdowns open when clicking switches
  // ------------------------------------------------
  if ($(".switchery").length > 0) {
    $(".switchery").on("click", function(e) {
      e.stopPropagation();
    });
  }

  // Dropdown menu animation
  // ------------------------------------------------
  if ($(".dropdown").length > 0) {
    $(".dropdown").on("hidden.bs.dropdown", function() {
      $(this)
      .find(".dropdown-menu")
      .removeAttr("style");
    });
  }

  // Tooltip init
  // ------------------------------------------------
  if ($('[data-toggle="tooltip"]').length > 0) {
    $('[data-toggle="tooltip"]').tooltip();
  }
  // Reset Form
  // ------------------------------------------------
  $(".clear-form").on("click", function() {
    $(this)
    .closest("form")
    .find(":input")
    .val("");
    $(this)
    .closest("form")
    .find(":checkbox")
    .prop("checked", false);
    $(this)
    .closest("form")
    .find(":radio")
    .prop("checked", false);
  });
  // Popover init
  // ------------------------------------------------
  if ($('[data-toggle="popover"]').length > 0) {
    $('[data-toggle="popover"]').popover({
      container: "body",
      html: true,
      content: function() {
        return $(this)
        .next(".popper-content")
        .html();
      }
    });
  }

  // Auto Hide Menu Option for Horizontal Menu
  // ------------------------------------------------
  if ($("body.layout-horizontal.menu-auto-hide").length > 0) {
    // scroll is still position
    var scroll = $(document).scrollTop();
    var headerHeight = $('.header-bottom').outerHeight();
    //console.log(headerHeight);

    $(window).scroll(function() {
      // scrolled is new position just obtained
      var scrolled = $(document).scrollTop();

      // optionally emulate non-fixed positioning behaviour

      if (scrolled > headerHeight) {
        $('.header-bottom').addClass('off-canvas');
      } else {
        $('.header-bottom').removeClass('off-canvas');
      }

      if (scrolled > scroll) {
        // scrolling down
        $('.header-bottom').removeClass('fixed');
      } else {
        //scrolling up
        $('.header-bottom').addClass('fixed');
      }

      scroll = $(document).scrollTop();
    });
  }

  // File Upload - get file name to display
  // ------------------------------------------------
  $('.custom-file-input').on('change',function(){
       //get the file name
       var fileName = $(this).val().replace(/^.*\\/, "");
       //replace the "Choose a file" label
       $(this).next('.custom-file-label').html(fileName);
   });

});
})(window, document, window.jQuery);

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

// -----------------------------------------------------------------------------
// Title: Recent Transactions
// ID: #recent-transaction-table
// Location: index.html
// Dependency File(s):
// assets/vendor/datatables.net/js/jquery.dataTables.js
// assets/vendor/datatables.net-bs4/js/dataTables.bootstrap4.js
// -----------------------------------------------------------------------------
(function(window, document, $, undefined) {
	  "use strict";
	$(function() {
		$('#recent-transaction-table').DataTable({
			"columnDefs": [{
				"targets": 'no-sort',
				"orderable": false,
			}],
			"columns": [
				null,
				null,
				null,
				null,
				{
					"width": "10%"
				}]
		});
	});

})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// Title: Monthly budget
// ID: #monthly-budget
// Location: index.html
// Dependency File(s):
// assets/vendor/flot/jquery.flot.js
// assets/vendor/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js
// assets/vendor/flot/jquery.flot.resize.js
// assets/vendor/flot/jquery.flot.time.js
// assets/vendor/flot.curvedlines/curvedLines.js
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
	  "use strict";
	$(function() {
		var data7_1 = [
			[0, 4],
			[1, 8],
			[2, 5],
			[3, 10],
			[4, 4],
			[5, 16],
			[6, 5],
			[7, 11],
			[8, 6],
			[9, 11],
			[10, 30],
			[11, 10],
			[12, 13],
			[13, 4],
			[14, 3],
			[15, 3],
			[16, 6]
		];
		var data7_2 = [
			[0, 1],
			[1, 0],
			[2, 2],
			[3, 0],
			[4, 1],
			[5, 3],
			[6, 1],
			[7, 5],
			[8, 2],
			[9, 3],
			[10, 2],
			[11, 1],
			[12, 0],
			[13, 2],
			[14, 8],
			[15, 0],
			[16, 0]
		];

		$.plot($("#monthly-budget #monthly-budget-content"), [{
			data: data7_1,
			label: "Expenses",
			points: {
				show: false
			},
			curvedLines: {
				apply: true
			},
			lines: {
				fill: true
			}
		}, {
			data: data7_2,
			label: "Income",
			points: {
				show: false
			},
			lines: {
				show: true
			},
			yaxis: 2
		}], {
			series: {
				lines: {
					show: true,
					fill: true
				},
				curvedLines: {
					apply: true,
					monotonicFit: true,
					active: true
				},
				points: {
					show: true,
					lineWidth: 2,
					fill: true,
					fillColor: "#ffffff",
					symbol: "circle",
					radius: 5
				},
				shadowSize: 0
			},
			grid: {
				hoverable: true,
				clickable: true,
				tickColor: "#e5ebf8",
				borderWidth: 1,
				borderColor: "#e5ebf8"
			},
			colors: [QuantumPro.APP_COLORS.accent, QuantumPro.APP_COLORS.primary],
			tooltip: true,
			tooltipOpts: {
				defaultTheme: false
			},
			xaxis: {
				ticks: [
					[1, "Jan"],
					[2, "Feb"],
					[3, "Mar"],
					[4, "Apr"],
					[5, "May"],
					[6, "Jun"],
					[7, "Jul"],
					[8, "Aug"],
					[9, "Sep"],
					[10, "Oct"],
					[11, "Nov"],
					[12, "Dec"]
				]
			},
			yaxes: [{}, {
				position: "right" /* left or right */
			}]
		});
	});
})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// Title: Users
// ID: #usersChart
// Location: index.html
// Dependency File(s): assets/vendor/chart.js/dist/Chart.bundle.min.js
// -----------------------------------------------------------------------------
(function(window, document, $, undefined) {
    "use strict";
  $(function() {
    if ($('#usersChart').length == 0) {
      return;
    }
    var ctx = document.getElementById("usersChart").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0, Chart.helpers.color(QuantumPro.APP_COLORS.info).alpha(0.9).rgbString());
    gradient.addColorStop(1, Chart.helpers.color('#ffffff').alpha(0).rgbString());
    var config = {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{
          label: "User Accounts",
          backgroundColor: gradient,
          borderWidth: 2,
          borderColor: QuantumPro.APP_COLORS.info,
          pointBackgroundColor: Chart.helpers.color(QuantumPro.APP_COLORS.info).alpha(1).rgbString(),
          pointBorderColor: Chart.helpers.color('#ffffff').alpha(0).rgbString(),
          pointHoverBackgroundColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),
          pointHoverBorderColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),
          data: [11, 13, 10, 14, 16, 12, 14, 18]
        }]
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          position: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        },
        elements: {
          line: {
            tension: 0.000001
          },
          point: {
            radius: 4,
            borderWidth: 8
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 50,
            bottom: 0
          }
        }
      }
    };

    var chart = new Chart(ctx, config);

  });

})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// Title: Bounce Rate
// ID: #bounceRateChart
// Location: index.html
// Dependency File(s): assets/vendor/chart.js/dist/Chart.bundle.min.js
// -----------------------------------------------------------------------------
(function(window, document, $, undefined) {
  "use strict";
  $(function() {

    if ($('#bounceRateChart').length == 0) {
      return;
    }
    var ctx = document.getElementById("bounceRateChart").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0, Chart.helpers.color(QuantumPro.APP_COLORS.warning).alpha(0.9).rgbString());
    gradient.addColorStop(1, Chart.helpers.color('#ffffff').alpha(0).rgbString());
    var config = {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{
          label: "Bounce Rate",
          backgroundColor: gradient,
          borderWidth: 2,
          borderColor: QuantumPro.APP_COLORS.warning,
          pointBackgroundColor: Chart.helpers.color(QuantumPro.APP_COLORS.warning).alpha(1).rgbString(),
          pointBorderColor: Chart.helpers.color('#ffffff').alpha(0).rgbString(),
          pointHoverBackgroundColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),
          pointHoverBorderColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),
          data: [4, 5, 4, 6, 7, 6, 4, 2]
        }]
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          position: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        },
        elements: {
          line: {
            tension: 0.000001
          },
          point: {
            radius: 4,
            borderWidth: 8
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 50,
            bottom: 0
          }
        }
      }
    };

    var chart = new Chart(ctx, config);

  });

})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// Title: Session Duration
// ID: #sessionDuration
// Location: index.html
// Dependency File(s): assets/vendor/chart.js/dist/Chart.bundle.min.js
// -----------------------------------------------------------------------------
(function(window, document, $, undefined) {
  "use strict";
  $(function() {
    if ($('#sessionDuration').length == 0) {
      return;
    }
    var ctx = document.getElementById("sessionDuration").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0, Chart.helpers.color(QuantumPro.APP_COLORS.primary).alpha(0.9).rgbString());
    gradient.addColorStop(1, Chart.helpers.color('#ffffff').alpha(0).rgbString());
    var config = {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{
          label: "Session Duration",
          backgroundColor: gradient,
          borderWidth: 2,
          borderColor: QuantumPro.APP_COLORS.primary,
          pointBackgroundColor: Chart.helpers.color(QuantumPro.APP_COLORS.primary).alpha(1).rgbString(),
          pointBorderColor: Chart.helpers.color('#ffffff').alpha(0).rgbString(),
          pointHoverBackgroundColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),
          pointHoverBorderColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),
          data: [4, 5, 4, 6, 7, 8, 10, 14]
        }]
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          position: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        },
        elements: {
          line: {
            tension: 0.000001
          },
          point: {
            radius: 4,
            borderWidth: 8
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 50,
            bottom: 0
          }
        }
      }
    };

    var chart = new Chart(ctx, config);

  });

})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// Title: SweetAlert Demos
// Location: components.sweetalert2.html
// Dependency File(s): assets/vendor/sweetalert2/dist/sweetalert2.min.js
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
  $(function() {

    //== SweetAlert Demo 1
    $('#sweetalert_demo_1').on('click', function(e) {
      swal('Good job!');
    });
    //== SweetAlert Demo 2
    $('#sweetalert_demo_2').on('click', function(e) {
      swal(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    });
    //== SweetAlert Demo 3
    $('#sweetalert_demo_3').on('click', function(e) {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>',
      })
    });
    //== SweetAlert Demo 4
    $('#sweetalert_demo_4').on('click', function(e) {
      swal({
        imageUrl: '../assets/img/demos/sweetalert_demo_4.jpg',
        imageHeight: 1512,
        imageAlt: 'A tall image'
      })
    });
    //== SweetAlert Demo 5
    $('#sweetalert_demo_5').on('click', function(e) {
      swal({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html: 'You can use <b>bold text</b>, ' +
          '<a href="//github.com">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="zmdi zmdi-thumb-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i class="zmdi zmdi-thumb-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
      })
    });
    //== SweetAlert Demo 6
    $('#sweetalert_demo_6').on('click', function(e) {
      swal({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    });
    //== SweetAlert Demo 7
    $('#sweetalert_demo_7').on('click', function(e) {
      swal({
        title: 'Custom animation with Animate.css',
        animation: false,
        customClass: 'animated tada'
      })
    });
    //== SweetAlert Demo 8
    $('#sweetalert_demo_8').on('click', function(e) {
      swal({
        title: 'Estas seguro?',
        text: "Se agregara 1bs a tu cuenta",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, lo quiero'
      }).then((result) => {
        if (result.value) {
          swal(
            'Agregado!',
            'Tu cancion sonara en breve.',
            'success'
          )
        }
      })
    });
    //== SweetAlert Demo 9
    $('#sweetalert_demo_9').on('click', function(e) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
        ) {
          swal(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    });
    //== SweetAlert Demo 10
    $('#sweetalert_demo_10').on('click', function(e) {
      swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false
      })
    });
    //== SweetAlert Demo 11
    $('#sweetalert_demo_11').on('click', function(e) {
      swal({
        title: 'Auto close alert!',
        text: 'I will close in 5 seconds.',
        timer: 5000,
        onOpen: () => {
          swal.showLoading()
        }
      }).then((result) => {
        if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.timer
        ) {
          console.log('I was closed by the timer')
        }
      })
    });
    $('#sweetalert_ui-blocking-demo-1').on('click', function(e) {
      swal('Good job!');
    });
    $('#sweetalert_ui-blocking-demo-2').on('click', function(e) {
      swal('Good job!');
    });

  });

})(window, document, window.jQuery);


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

(function(window, document, $, undefined) {
  "use strict";
  var DropzoneDemos = function() {

    // single file upload
    Dropzone.options.singleFileUpload = {
      paramName: "file",
      maxFiles: 1,
      maxFilesize: 5, // MB
      accept: function(file, done) {
        if (file.name == "justinbieber.jpg") {
          done("Naha, you don't.");
        } else {
          done();
        }
      }
    };

    // multi file upload
    Dropzone.options.multiFileUpload = {
      paramName: "file",
      maxFiles: 15,
      maxFilesize: 15,
      accept: function(file, done) {
        if (file.name == "justinbieber.jpg") {
          done("Naha, you don't.");
        } else {
          done();
        }
      }
    };

    // file type validation
    Dropzone.options.fileTypeValidation = {
      paramName: "file",
      maxFiles: 15,
      maxFilesize: 15,
      addRemoveLinks: true,
      acceptedFiles: ".png,.jpg,.gif,.bmp,.jpeg",
      accept: function(file, done) {
        if (file.name == "justinbieber.jpg") {
          done("Naha, you don't.");
        } else {
          done();
        }
      }

    };

  }

  DropzoneDemos();

})(window, document, window.jQuery);

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

(function(window, document, $, undefined) {
    "use strict";
  $(function() {
    $("#product-id_10").rateYo({
      rating: 2.5,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_25").rateYo({
      rating: 3.5,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_57").rateYo({
      rating: 4.6,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_42").rateYo({
      rating: 2.3,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });


    $("#product-id_38").rateYo({
      rating: 2.6,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });

    $("#product-id_32").rateYo({
      rating: 1.3,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_100").rateYo({
      rating: 4.5,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_101").rateYo({
      rating: 3.3,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_102").rateYo({
      rating: 4.0,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_103").rateYo({
      rating: 2.5,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_104").rateYo({
      rating: 2.0,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_11").rateYo({
      rating: 3.3,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });

    $("#product-id_65").rateYo({
      rating: 4.0,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_26").rateYo({
      rating: 4.5,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_27").rateYo({
      rating: 1.5,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_28").rateYo({
      rating: 2.8,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_180").rateYo({
      rating: 3.6,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
  });
})(window, document, window.jQuery);

(function(window, document, $, undefined) {
	  "use strict";
	$(function() {

		// basic
		$("#s2_demo1").select2();

		// nested
		$('#s2_demo2').select2({
			placeholder: "Select a state"
		});

		// multi select
		$('#s2_demo3').select2({
			placeholder: "Select a state"
		});

		// placeholder
		$("#s2_demo4").select2({
			placeholder: "Select a State",
			allowClear: true
		});

		// Minimum Input
		$("#s2_demo5").select2({
			minimumInputLength: 2,
			placeholder: "Select a State",
		});


	});

})(window, document, window.jQuery);
