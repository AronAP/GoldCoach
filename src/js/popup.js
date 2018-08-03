$(document).ready(function () {
  var modal = $('.popup'),
    overlay = $('.overlay'),
    link = $('.button[data-popup="true"]'),
    submit = $('.form-btn[type="submit"]'),
    close = $('.close-btn');

  close.click(function () {
    modal.hide();
    overlay.hide();
  });

  link.on('click', function () {
    overlay.show();
    modal.show();
  });

  overlay.on('click', function () {
    overlay.hide();
    modal.hide();
  });

  submit.on('click', function () {
    $('input')[0].reset();
  });


});
