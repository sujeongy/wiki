window.addEventListener('load', function(){
  "use strict";
  console.log('app.js execute!');
  // new CalendarController();

  $('.contents').load('src/view/calender.html');

  // TODO 모듈화 하기
  // var MANIFEST_DATE = (function () {
  //   // var date = moment();
  //   var _ = {
  //     config: {
  //       // moment: moment(),
  //       prevBtn: $('#prev-btn'),
  //       nextBtn: $('#next-btn'),
  //       todayBtn: $('#today-btn'),
  //       today: $('#today_date')
  //     },
  //     init: function (options) {
  //       console.log('init!');
  //       $.extend( _.config, options );
  //       _.setTodayDate(date);
  //       _.getTodayDate(date);
  //     },
  //     formatDate: function(d) {
  //       return d.format('YYYY.MM.DD');
  //     },
  //     setTodayDate: function (d) {
  //       var current = _.formatDate(d);
  //       return _.config.today.text(current);
  //     },
  //     getTodayDate: function (d) {
  //       // console.log('_.config.prevBtn', _.config.prevBtn)
  //       _.changeDate(_.config.prevBtn, d.subtract(1, 'days'))
  //       // _.changeDate(_.config.nextBtn, _.config.date.add(1, 'days'))
  //       _.changeDate(_.config.todayBtn, d)
  //     },
  //     changeDate: function (target, d) {
  //       target.click(function () {
  //         _.setTodayDate(d);
  //       })
  //     }
  //   };
  //
  //   return {
  //     init: _.init
  //   }
  // })();
  //
  // MANIFEST_DATE.init();

  function fomatDate(moment) {
    return moment.format('YYYY.MM.DD');
  }
  function setToday(date) {
    var current = fomatDate(date);
    return $('#today_date').text(current);
  }
  var date = moment();
  setToday(date);
  console.log('date', date)
  $('#prev-btn').on('click', function () {
    setToday(date.subtract(1, 'days'));
  });
  $('#next-btn').on('click', function () {
    setToday(date.add(1, 'days'));
  });
  $('#today-btn').on('click', function () {
    setToday(moment());
  });

});
