const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.scripts([
    'resources/quantumpro/vendor/modernizr/modernizr.custom.js',
    'resources/quantumpro/vendor/bootstrap/dist/js/bootstrap.bundle.min.js/',
    'resources/quantumpro/vendor/js-storage/js.storage.js',
    'resources/quantumpro/vendor/js-cookie/src/js.cookie.js',
    'resources/quantumpro/vendor/pace/pace.js',
    'resources/quantumpro/vendor/metismenu/dist/metisMenu.js',
    'resources/quantumpro/vendor/switchery-npm/index.js',
    'resources/quantumpro/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
    'resources/quantumpro/vendor/countup.js/dist/countUp.min.js',
    'resources/quantumpro/vendor/chart.js/dist/Chart.bundle.min.js',
    'resources/quantumpro/vendor/flot/jquery.flot.js',
    'resources/quantumpro/vendor/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js',
    'resources/quantumpro/vendor/flot/jquery.flot.resize.js',
    'resources/quantumpro/vendor/flot/jquery.flot.time.js',
    'resources/quantumpro/vendor/flot.curvedlines/curvedLines.js',
    'resources/quantumpro/vendor/datatables.net/js/jquery.dataTables.js',
    'resources/quantumpro/vendor/datatables.net-bs4/js/dataTables.bootstrap4.js',
    'resources/quantumpro/js/global/app.js',
    'resources/quantumpro/js/components/countUp-init.js',
    'resources/quantumpro/js/cards/counter-group.js',
    'resources/quantumpro/js/cards/recent-transactions.js',
    'resources/quantumpro/js/cards/monthly-budget.js',
    'resources/quantumpro/js/cards/users-chart.js',
    'resources/quantumpro/js/cards/bounce-rate-chart.js',
    'resources/quantumpro/js/cards/session-duration-chart.js',
    'resources/quantumpro/vendor/sweetalert2/dist/sweetalert2.min.js',
    'resources/quantumpro/js/components/sweetalert2.js',
    'resources/quantumpro/js/components/switchery-init.js',
    'resources/quantumpro/vendor/dropzone/dropzone.js',
    'resources/quantumpro/js/components/dropzone-init.js',
    'resources/quantumpro/js/components/drag-and-drop-init.js',
    'resources/quantumpro/vendor/dragula/dragula.min.js',
    'resources/quantumpro/vendor/wNumb/wNumb.js',
    'resources/quantumpro/vendor/noUiSlider/nouislider.min.js',
    'resources/quantumpro/vendor/rateYo/jquery.rateyo.min.js',
    'resources/quantumpro/js/components/ecom-dashboard-slider-init.js',
    'resources/quantumpro/js/components/rateYo-init.js',
    'resources/quantumpro/vendor/select2/select2.min.js',
    'resources/quantumpro/js/components/select2-init.js',





], 'public/js/jsquantum.js')
    

.styles([
    'resources/quantumpro/css/vendor/bootstrap.css',
    'resources/quantumpro/vendor/metismenu/dist/metisMenu.css',
    'resources/quantumpro/vendor/switchery-npm/index.css',
    'resources/quantumpro/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css',
    'resources/quantumpro/css/icons/line-awesome.min.css',
    'resources/quantumpro/css/icons/simple-line-icons.css',
    'resources/quantumpro/css/icons/dripicons.min.css',
    'resources/quantumpro/css/icons/material-design-iconic-font.min.css',
    'resources/quantumpro/vendor/dragula/dragula.min.css',
    'resources/quantumpro/vendor/select2/select2.min.css',
    'resources/quantumpro/css/common/main.bundle.css',
    'resources/quantumpro/css/layouts/vertical/core/main.css',
    'resources/quantumpro/css/layouts/vertical/menu-type/content.css',
    'resources/quantumpro/css/layouts/vertical/themes/theme-f.css',


], 'public/css/cssquantum.css')


.styles([
    'resources/quantumpro/css/vendor/bootstrap.css',
    'resources/quantumpro/vendor/metismenu/dist/metisMenu.css',
    'resources/quantumpro/vendor/switchery-npm/index.css',
    'resources/quantumpro/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css',
    'resources/quantumpro/css/icons/line-awesome.min.css',
    'resources/quantumpro/css/icons/simple-line-icons.css',
    'resources/quantumpro/css/icons/dripicons.min.css',
    'resources/quantumpro/css/icons/material-design-iconic-font.min.css',
    'resources/quantumpro/vendor/dragula/dragula.min.css',
    'resources/quantumpro/vendor/select2/select2.min.css',
    'resources/quantumpro/css/common/main.bundle.css',
    'resources/quantumpro/css/layouts/vertical/core/main.css',
    'resources/quantumpro/css/layouts/vertical/menu-type/content.css',
    'resources/quantumpro/css/layouts/vertical/themes/theme-rojo.css',


], 'public/css/cssquantumcliente.css');

mix.js('resources/js/app.js', 'public/js')
   ;