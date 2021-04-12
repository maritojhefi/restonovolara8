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
