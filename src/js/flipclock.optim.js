$(function () {

  var clock = new FlipClock($('.clock-time'), {
    clockFace: 'DailyCounter',
    autoStart: false,
    countdown: true,
    language: 'russian',
    callbacks: {
      stop: function () {
        $('.clock-time').html('Время вышло!');
      }
    }
  });

  var dt = new Date('May 17 2019 20:00:00'),
      first = new Date(dt),
      remaining = first;

  clock.setTime(remaining);
  clock.setCountdown(true);
  clock.start();

});