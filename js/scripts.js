function getError(input) {
  if (input.length === 0) {
    return "Error: Invalid Input";
  } if (parseFloat(input) !== parseInt(input)) {
    return "Error: Invalid Input";
  } if (parseInt(input) < 1) {
    return "Error: Invalid Input";
  }
}

function pingPong(number) {
  if (number % 15 === 0) {
    return "Ping-Pong";
  } else if (number % 3 === 0) {
    return "Ping";
  } else if (number % 5 === 0) {
    return "Pong";
  } else {
    return number;
  }
}

function pingPongList(range) {
  var result = [];
  for (var i = 1; i <= range; i++) {
    result.push(pingPong(i));
  }
  return result;
}

$(document).ready(function () {
  $("#number").submit(function(event) {
    event.preventDefault();
    $(".invalid-feedback").hide();
    $("input#range").removeClass("is-invalid");
    $(".results").empty();

    var range = $("input#range").val();
    var error = getError(range);
    if (error) {
      $(".invalid-feedback").show();
      $("input#range").addClass("is-invalid")
    } else {
      var results = pingPongList(parseInt(range));
      results.forEach(function(result) {
        $(".results").append("<li>" + result + "</li>");
      });
    }
  });
});
