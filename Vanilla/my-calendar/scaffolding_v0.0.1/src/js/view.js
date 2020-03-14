(function(exports){
  (function CalendarView(value){
    var self = {
      config: function () {

      },
      init: function () {

      },

    }
    return {
      init: self.init
    }
  })();

  CalendarView.prototype = {
    render : function(value) {
      console.log('v', value)
      $('#today_date').text(value);
    }
  };
  exports.CalendarView = CalendarView;
})(this);
