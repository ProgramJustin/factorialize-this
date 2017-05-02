var factorialize = function(input) {
  if (input === 0) {
    return 1;
  }
  for (var i = input; i > 1; i--) {
    input = multiply(input, i);
  }
  return input;
};

var multiply = function(input, i) {
  return input * (i - 1)
}


$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    //gather input from user
    var input = $('input[name="input-number"]').val();
    input = parseInt(input);

    input = factorialize(input);

    //display to page
    $('.jumbotron h1').text(input);

  });
});
