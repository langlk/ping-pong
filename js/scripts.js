function getError(input) {
  if (input.length === 0) {
    return "Error: Invalid Input";
  } if (parseFloat(input) !== parseInt(input)) {
    return "Error: Invalid Input";
  } 
}

$(document).ready(function () {
  $("#number").submit(function(event) {
    event.preventDefault();
    var range = $("input#range").val();
    console.log(getError(range));
  });
});
