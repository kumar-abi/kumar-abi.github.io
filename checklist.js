$(function() {

  $(".input").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    elementThatWasClicked.parent().parent().remove();
  })

})