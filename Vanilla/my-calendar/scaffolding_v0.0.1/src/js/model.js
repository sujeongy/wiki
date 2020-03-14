(function(exports){
  function CalendarModel(value){
    value = value || 100;
    this.data = value;
    // this.today = moment();
    this.today = moment().format('YYYY-MM-DD');
  }
  CalendarModel.prototype = {
    increase : function(value){
      value = value || 1;
      this.data += value;
      return this.data;
    },
    decrease : function(value){
      value = value || 1;
      this.data -= value;
      return this.data;
    },
    getData : function(){
      return this.data;
    },
    getDate : function () {
      return moment().format('YYYY-MM-DD');
      // return this.today;
    }
  };
  exports.CalendarModel = CalendarModel;

})(this);
