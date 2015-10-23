//= require jquery
//= require_tree .

var swap = function(img) {
    var current = img.attr("src");
    var swap = img.attr("data-swap");
    img.attr('src', swap).attr("data-swap",current);
 }

$(document).ready(() => {
  var flips = ["fa-flip-vertical1", "fa-flip-vertical2", "fa-flip-vertical3"]
  flips.forEach((flip) => {
    $("." + flip).click(() => {
      swap($("#" + flip));
    });
  });
});
