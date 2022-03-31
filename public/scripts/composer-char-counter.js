
$(document).ready(function () {
  console.log('document is ready!');

  //Countdowns Number of Characters when Tweet Box is being typed
  $("#tweet-text").keypress(function () {
    let maxLength = 140;
    let currentLength = $("#tweet-text").val().length;

    if (currentLength >= maxLength) {
      $(".counter").css("color", "red");
    }
    else {
      $(".counter").css("color", "#545149");
    }

    $(".counter").val(139 - currentLength);
  });

});

