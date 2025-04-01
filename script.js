const quote = document.querySelector(".quote");
const generate=document.getElementById("generate");
const category = document.getElementById("category");
const likeQuote = document.getElementById("likeQuote");
const likeList = document.getElementById("likeList");
function generateQuote() {
    let div = document.createElement("div");
    quote.innerHTML =`Loading New Quotes..`;
    fetch("https://api.api-ninjas.com/v1/quotes",{
        headers: {
            "X-Api-Key":"1cI36n+FTC++SdEkHhoo8A==uetXzgzY1LomElJU"}
    })
    .then(response => response.json())
        .then((data)=>{
        console.log(data);

        quote.innerHTML = data[0].quote;
    })
}
generateQuote();