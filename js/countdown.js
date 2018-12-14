(function ($) {
  "use strict";

  $.fn.extend({ 

    countdownX: function(options) {
      var defaults = {
        timeZone: "",
        endTimeYear: 0,
        endTimeMonth: 0,
        endTimeDate: 0,
        endTimeHours: 0,
        endTimeMinutes: 0,
        endTimeSeconds: 0,
      }

      var options =  $.extend(defaults, options);

      return this.each(function() {
        var obj = $(this);
        var timeNow = new Date();

        var tZ = options.timeZone; console.log(tZ);
        var endYear = options.endTimeYear;
        var endMonth = options.endTimeMonth;
        var endDate = options.endTimeDate;
        var endHours = options.endTimeHours;
        var endMinutes = options.endTimeMinutes;
        var endSeconds = options.endTimeSeconds;

        if(tZ == "") {
          var deadline = new Date(endYear, endMonth - 1, endDate, endHours, endMinutes, endSeconds);
        } 
        else {
          var deadline = moment.tz([endYear, endMonth - 1, endDate, endHours, endMinutes, endSeconds], tZ).format();
        }

        if(Date.parse(deadline) < Date.parse(timeNow)) {
          var deadline = new Date(Date.parse(new Date()) + endDate * 24 * 60 * 60 * 1000 + endHours * 60 * 60 * 1000); 
        }
        
        var t = Date.parse(deadline) - Date.parse(new Date());
          
        var clock = $(obj).FlipClock(t/1000, {
          clockFace: 'DailyCounter',
          countdown: true
        });


      });
    }
  });

})(jQuery);