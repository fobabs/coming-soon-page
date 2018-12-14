$(document).ready(function() {
  var clock;

  // Grab the current date
  var timeNow = new Date();

  // Target future date/24 hour time/Timezone
  var deadline = moment.tz("2019-03-01 23:59", "Africa/Lagos");

  // Calculate the difference in seconds between the future and current date
  var diff = deadline / 1000 - timeNow.getTime() / 1000;

  // Countdown timer
  clock = $("#countTim").FlipClock(diff, {
    clockFace: "DailyCounter",
    countdown: true,
    callbacks: {
      stop: function() {
        console.log("Launching in a moment");
      }
    }
  });
    
});
