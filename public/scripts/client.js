/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  loadTweets();


  const renderTweets = function (tweets) {
    const $tweetsContainer = $('.tweet-container')

    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $tweetsContainer.prepend($tweet);
    }

  }


  const createTweetElement = function (tweet) {


    const tweetHTML = `
    <div class="tweet">
      <header class="tweet-header">
        <img class="tweet-avatar" src="${tweet.user.avatars}" />
        <h2 class="tweet-name">${tweet.user.name}</h2>
        <h2 class="tweet-handler">${tweet.user.handle}</h2>
      </header>
      <div class="tweet-body">
        <p>${tweet.content.text}</p>
      </div>
      <footer class="tweet-footer">
        <small class="footer-days">${timeago.format(tweet.created_at)}</small>
          <span class="icons-footer">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-repeat"></i>
            <i class="fa-solid fa-heart"></i>
        </span>
      </footer>
    </div>
    `



    return tweetHTML;
  }


  function loadTweets() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function (data) {
        console.log('Success: ', data);
        $('#tweet-text').val('');
        renderTweets(data);
      });
  }



  $("form").on("submit", function (event) {
    const tweetText = $($(this).children()[0]).val();

    if (tweetText.length > 140) {
      alert('You have excedded character limit!')
    }
    else if (tweetText === '') {
      alert('You need to submit a tweet!')

    }
    else {
      console.log('Tweet is submitted!')
      event.preventDefault();
      const serializedData = $(this).serialize()


      $.post("/tweets", serializedData, () => {
        loadTweets();

      });
    }
  });


});