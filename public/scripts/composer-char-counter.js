
$(document).ready(function () {
  console.log('document is ready!');

  $("#tweet-text").keypress(function () {
    let maxLength = 140;
    let currentLength = $("#tweet-text").val().length;

    if (currentLength >= maxLength) {
      $(".counter").css("color", "red");
    }

    $(".counter").val(maxLength - currentLength);
  });

});

