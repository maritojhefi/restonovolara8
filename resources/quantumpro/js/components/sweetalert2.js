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
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          swal(
            'Deleted!',
            'Your file has been deleted.',
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
