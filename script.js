var quote;
var author;

function newQuote(){
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data.length); testing the length for the multiplication porpuse
    let x = Math.floor((Math.random() * data.length) + 1);
    console.log(quote);
    document.getElementById('quote').innerHTML = JSON.stringify(data[x].text);
    document.getElementById('author').innerHTML = `Author: ${JSON.stringify(data[x].author)}`;
    
  });
    
}