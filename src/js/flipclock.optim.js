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

  var dt = new Date('October 17 2018 23:59:59'),
      first = new Date(dt),
      remaining = first;

  clock.setTime(remaining);
  clock.setCountdown(true);
  clock.start();

});