let button = document.querySelector('.button');
let output = document.querySelector('.output');
let quote =
    ["Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "It is better to fail in originality than to succeed in imitation.",
    "The road to success and the road to failure are almost exactly the same."];

button.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
});