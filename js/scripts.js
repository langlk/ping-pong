function getError(input) {
  if (input.length === 0) {
    return "Error: Invalid Input";
  } if (parseFloat(input) !== parseInt(input)) {
    return "Error: Invalid Input";
  }
}

function pingPong(number) {
  if (number % 3 === 0) {
    return "Ping";
  }
  return number;
}

$(document).ready(function () {
  $("#number").submit(function(event) {
    event.preventDefault();
    var range = $("input#range").val();
    console.log(pingPong(range));
  });
});
