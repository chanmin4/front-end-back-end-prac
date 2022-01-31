const quotes = [
    {
        quote: "hello",
        author: "nice"
    },
    {
        quote: "hi",
        author: "cool"
    }
    ,
    {
        quote: "tih",
        author: "ooo"
    }
]
const quote= document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const todayquote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todayquote.quote;
author.innerText=todayquote.author;