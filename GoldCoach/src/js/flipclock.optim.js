$(function () {

  var clock;

  clock = $('.clock-time').FlipClock({
    clockFace: 'DailyCounter',
    autoStart: false,
    language: 'russian',
    callbacks: {
      stop: function () {
        $('.clock-title').html('Время вышло!');
      }
    }
  });

  var dt        = 'August 17 2018 20:00:0',
      first       = new Date(dt),
      last        = Date.now(),
      remaining   = first - last;

  remaining /= 1000;

  clock.setTime(remaining);
  clock.setCountdown(true);
  clock.start();

});
