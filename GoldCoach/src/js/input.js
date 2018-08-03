jQuery(function ($) {

  $('.phone').mask('+7 (999) 999-9999');

  $('.form-reset').on('click', function () {
    $(this).parent().find('input').val('');
  });

});
