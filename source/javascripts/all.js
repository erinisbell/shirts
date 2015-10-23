//= require jquery
//= require_tree .

$(document).ready(() => {
  $(".fa-flip-vertical1").click(function() {
      var _this = $("#one");
      var current = _this.attr("src");
      var swap = _this.attr("data-swap1");
     _this.attr('src', swap).attr("data-swap1",current);
   });
   $(".fa-flip-vertical2").click(function() {
       var _this = $("#two");
       var current = _this.attr("src");
       var swap = _this.attr("data-swap2");
      _this.attr('src', swap).attr("data-swap2",current);
    });
    $(".fa-flip-vertical3").click(function() {
        var _this = $("#three");
        var current = _this.attr("src");
        var swap = _this.attr("data-swap3");
       _this.attr('src', swap).attr("data-swap3",current);
     });

});
