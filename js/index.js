// throwing $('#quote') into a variable
var $quote = $('#quote');
// the part that accesses the API
function getQuote() {
    $.ajax({
      format: "jsonp",
      dataType: "jsonp",
      url: "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
      success: function(data) {
        var text = data.quoteText;
        var author = data.quoteAuthor;
        $quote.html("<h3>" + text + "</h3><h4>" + author + "</h4>");

      },
      method: "GET"
    })
  }
  // the part that generates the random quote when the button is clicked
$(document).ready(function() {
  $("#generate-quote").click(function() {
    $quote.removeClass("hide-quote");
    getQuote();
  });
})

// setting up to tweet a quote
$(document).ready(function() {
  $('#tweet-button').click(function() {
    $.ajax({
      format: "jsonp",
      dataType: "jsonp",
      url: "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
      success: function(data) {
        var text = data.quoteText;
        if (text.length < 140) {
          $('#tweet').html("<a href='https://twitter.com/home/?status=" + text + "' target='_blank'>Tweet this one</a>")
        } else {
          $("#tweet").html("<a href='#'>Hold on, let me find a good one</a>")
        }
      },
      method: "GET"
    })
  })
})