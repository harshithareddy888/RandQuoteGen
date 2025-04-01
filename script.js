const quote = document.querySelector(".quote");
const generate=document.getElementById("generate");
const category = document.getElementById("category");
const likeQuote = document.getElementById("likeQuote");
const likeList = document.getElementById("likeList");
function generateQuote() {
    let div = document.createElement("div");
    quote.innerHTML =`Loading New Quotes... <i class="fa-solid fa-sync fa-spin"></i>`
    fetch("https://api.api-ninjas.com/v1/quotes",{
        headers: {
            "X-Api-Key":"1cI36n+FTC++SdEkHhoo8A==uetXzgzY1LomElJU"}
    })
    .then(response => response.json())
        .then((data)=>{
        console.log(data);

        quote.innerHTML="";
        div.innerHTML = data[0].quote;
        quote.append(div);
    })
}
function LikeQuote(){
    if(likeQuote.style.color=="red"){
        likeQuote.removeAttribute("class");
        likeQuote.setAttribute("class","fa-regular fa-heart");
        likeQuote.style.color="black";
    }
    else{
    likeQuote.setAttribute("class","fa-solid fa-heart");
    likeQuote.style.color="red";
    }
}
function CopyQuote(){
    navigator.clipboard.writeText(quote.innerText);    
}
function TwitterQuote(){
    let twitterUrl=`https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(twitterUrl,"_blank");
}