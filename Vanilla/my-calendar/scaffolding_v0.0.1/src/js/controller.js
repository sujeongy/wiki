(function(exports){
  function CalendarController(value){
    this.CalendarModel = new CalendarModel();
    this.CalendarView = new CalendarView();

    this.CalendarView.render(this.CalendarModel.getDate());
    // this.CalendarView.render(this.CalendarModel.getData());

    $(".btn-increase").on("click", $.proxy(this.onClickIncrease, this));
    $(".btn-decrease").on("click", $.proxy(this.onClickDecrease, this));
  }
  CalendarController.prototype = {
    onClickIncrease: function(){
      this.CalendarModel.increase();
      this.CalendarView.render(this.CalendarModel.getData());
    },
    onClickDecrease: function(){
      this.CalendarModel.decrease();
      this.CalendarView.render(this.CalendarModel.getData());
    }
  };

  exports.CalendarController = CalendarController;
})(this);
