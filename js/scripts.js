// business logic



// user interface logic
$(document).ready(function() {
  $("form#makealist").submit(function(event) {
    event.preventDefault();

    var todoItem = $("input#thingtodo").val();

    $(".thingtodo").append("<li>" + todoItem + "</li>");

  // $("ul#thelist").append("<li><span class ='newitem'>" + todoItem + "</span></li>");
  //
  $(".thingtodo").last().click(function() {
  $(".thingtodo").hide();
  });

  $("#thelist").show();
});
});
