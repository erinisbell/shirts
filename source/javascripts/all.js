//= require jquery
//= require_tree .

var swap = function(img) {
    var current = img.attr("src");
    var swap = img.attr("data-swap");
    img.attr('src', swap).attr("data-swap",current);
 }

$(document).ready(() => {
  var flips = ["flipOne", "flipTwo", "flipThree"]
  flips.forEach((flip) => {
    $("." + flip).click(() => {
      swap($("#" + flip));
    });
  });
});
