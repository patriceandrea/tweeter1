/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]





  const renderTweets = function (tweets) {
    const $tweetsContainer = $('.tweet-container').html('');

    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $tweetsContainer.prepend($tweet);
    }

  }


  const createTweetElement = function (tweet) {


    const imageDefault = 'https://i.imgur.com/nlhLi3I.png'

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
      <small class="footer-days">${tweet.created_at}</small>
        <span class="icons-footer">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-repeat"></i>
          <i class="fa-solid fa-heart"></i>
       </span>
      </footer>
      </div>
    `
    let $tweet = $('.tweet-container').append(tweetHTML);


    return $tweet;
  }

  renderTweets(data);



  $("form").on("submit", function (event) {
    console.log('Tweet is submitted!')
    event.preventDefault();
    const serializedData = $(this).serialize()


    $.post("/tweets", serializedData, () => {
      console.log(serializedData);
    });


  });




});